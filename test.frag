#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)*2.-1.;
    
    vec3 coord3=vec3(coord,length(coord));

    coord3=coord3*rotateY(u_time*.3);
    
    vec3 color=vec3(0.);
    
    float circle=length(coord)
    -(cos(atan(coord.y,coord.x)*6.)*sin(u_time)*.1)-.1;
    
    color+=step(1./(exp(circle)),.6);
    
    gl_FragColor=vec4(color,1.);
}