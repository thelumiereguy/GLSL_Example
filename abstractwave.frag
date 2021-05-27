#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    vec3 color=vec3(0.);
    float yAxis=sin(coord.y*3.14*5.)*cos(u_time)*.05;
    float xAxis=step(coord.x,yAxis);
    
    vec2 modulus=coord-xAxis;
    
    color=vec3(modulus,.7);
    
    gl_FragColor=vec4(color,1.);
}
