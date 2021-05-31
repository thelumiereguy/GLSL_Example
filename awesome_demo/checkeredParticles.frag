#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float plotShape(float pct,vec2 coords){
    return step(pct,coords.x/coords.y);
}

const float PI=3.14159265359;

void main(){
    // Normalize and map Cordinates from (-4,-4) to (4,4)
    vec2 coord=(gl_FragCoord.xy/u_resolution-.5)*9.;
    
    float pct=sin(coord.y*PI*20.)*(sin(u_time));
    
    float pct2=cos(coord.x*PI*20.)*(sin(u_time));
    
    float shape=plotShape(pct-pct2,coord);
    
    vec3 color=vec3(0.)+shape;
    
    gl_FragColor=vec4(color,1.);
}