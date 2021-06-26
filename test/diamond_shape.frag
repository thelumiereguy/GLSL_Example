#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)*2.-1.;
    coord.x*=(u_resolution.x/u_resolution.y);
    vec3 color=vec3(0.);
    
    float test=step(
        (
            length(
                sqrt(coord)
            )
        ),
    .5);
    color+=test;
    
    gl_FragColor=vec4(color,1.);
}