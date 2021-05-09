#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.14159265359;

uniform vec2 u_resolution;

void main(){
    vec2 coords=gl_FragCoord.xy/u_resolution.xy;
    const int rows=5;
    const int columns=5;
    
    vec3 canvasColor=vec3(.0);
    
    float XAxis=sign(sin(coords.x*(PI)*float(rows)));
    float YAxis=sign(sin(coords.y*(PI)*float(columns)));
    
    canvasColor=canvasColor+(XAxis*YAxis);
    
    gl_FragColor=vec4(canvasColor,1.);
}