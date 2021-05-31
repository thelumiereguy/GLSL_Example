#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coords=(gl_FragCoord.xy/u_resolution)-.5;
    
    float YAxis=step(abs(coords.x),.1);
    float XAxis=step(abs(coords.y),.1);
    vec4 color=vec4(vec3(1.),XAxis*YAxis);

    
    gl_FragColor=color;
}