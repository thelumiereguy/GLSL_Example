#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)*2.-1.;
    coord.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(0.,0.,0.);
    
    coord*=rotate(sin(u_time)/cos(u_time*length(coord)));
    
    float fract=fract(coord.x*10.)-.5+sin(coord.y*200.)*.1;
    
    float sin=step(
        fract,sin(u_time)*.56
    );
    
    color+=(sin);
    
    gl_FragColor=vec4(color,1.);
}