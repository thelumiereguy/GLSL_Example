#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float circle(float radius,vec2 position){
    return step(radius,length(position));
}

void main(){
    vec2 coord=vec2(u_mouse.x/u_resolution.x,1.-u_mouse.y/u_resolution.y)-.5;
    vec3 color=vec3(0.);
    
    float circle=circle(.3,coord.xy);
    
    color=color+(vec3(circle));
    
    gl_FragColor=vec4(color,1.);
}