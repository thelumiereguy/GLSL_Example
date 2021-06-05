#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const float PI=3.14159265359;

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

mat2 scale(vec2 scale){
    return mat2(scale.x,0.,0.,scale.y);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    vec3 color=vec3(0.);
    
    coord*=scale(
        vec2((sin(u_time)-2.))
    )*rotate(u_time);
    
    float centerCircle=step(abs(length(coord)-.4),(sin(u_time)*0.1)-.001);
    
    vec2 newCoords=vec2(fract(coord.x*20.),fract(coord.y*20.));
    
    // newCoords*=rotate(sin(u_time));
    
    float length=step(length(newCoords-.6),.1);
    
    color+=(length*centerCircle);
    
    gl_FragColor=vec4(color,1.);
}