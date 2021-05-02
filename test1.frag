#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coords=(gl_FragCoord.xy/u_resolution)-1.;
    
    float XAxis=1.-pow(abs(coords.x),.5);
    vec4 color=vec4(vec3(1.),XAxis);
    
    gl_FragColor=color;
}