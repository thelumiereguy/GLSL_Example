#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

vec2 punchOut(vec2 originalCoord){
    vec2 nonOffsettedCoords=fract(originalCoord*3.);
    
    originalCoord=originalCoord-.5;
    
    float square=step(
        abs(originalCoord.x),
    .333)*step(
        abs(originalCoord.y),
    .333);
    
    return(nonOffsettedCoords*(1.-square));
}

mat2 scale(vec2 scale){
    return mat2(scale.x,0.,0.,scale.y);
}

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution);
    coord*=scale(vec2(1./u_time));
    
    vec3 color=vec3(0);
    
    vec2 newCoords=punchOut(coord);
    
    for(int index=0;index<5;index++){  
        newCoords=punchOut(newCoords);
    }
    
    color+=length(newCoords);
    
    gl_FragColor=vec4(color,1.);
}