#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.14159265359;

uniform vec2 u_resolution;

void main(){
    vec2 normalizedCoords=gl_FragCoord.xy/u_resolution.xy;
     normalizedCoords.x*=u_resolution.x/u_resolution.y;

    const int rows=5;
    const int columns=5;
    
    vec3 canvasColor=vec3(.0);
    
    // Take only the sign of the values = 1 or -1
    float XAxis=sign(sin(normalizedCoords.x*(PI)*float(rows)));
    float YAxis=sign(sin(normalizedCoords.y*(PI)*float(columns)));
    
    canvasColor=canvasColor+(XAxis*YAxis);
    
    gl_FragColor=vec4(canvasColor,1.);
}