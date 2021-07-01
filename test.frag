#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

mat3 rotateZ(float angle){
    return
    mat3(
        1.,0,0,
        0,cos(angle),-sin(angle),
        0,sin(angle),cos(angle)
    )
    *mat3(
        cos(angle),0.,sin(angle),
        0,1.,0.,
        -sin(angle),0.,cos(angle)
    )*mat3(
        cos(angle),-sin(angle),0.,
        sin(angle),cos(angle),0.,
        0,0.,1.
    );
}

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)*2.-1.;
    coord.x*=u_resolution.x/u_resolution.y;
    
    vec3 eyePosition=vec3(0.,0.,-2.);
    
    vec3 rd=vec3(coord,0.);
    
    vec3 color=vec3(0.);
    
    gl_FragColor=vec4(color,1.);
}