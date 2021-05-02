#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coords=(gl_FragCoord.xy/u_resolution)-.5;
    
    float diagonal=step(.9,coords.x-coords.y);
    
    gl_FragColor=vec4(vec3(1.),diagonal);
}