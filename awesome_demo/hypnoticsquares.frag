#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const float scaleFactor=30.;

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    // coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float circle=length(coord-.5);
    
    vec2 rotatedCoords=(coord*rotate(u_time));
    
    vec3 newCoords=vec3(
        fract(rotatedCoords.x*20.),
        fract(rotatedCoords.y*20.),
        .0
    );
    
    float circle2=length(newCoords);
    
    color+=(circle-circle2);
    
    gl_FragColor=vec4(color,1.);
}
