#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

#define MAX_STEPS 100
#define MAX_DISTANCE 100.
#define SURF_DIST.01

float getDistance(vec3 point){
    vec4 s=vec4(0,1.,6.,1.);
    
    float sphereDistance=length(point-s.xyz)-s.w;
    float planeDistance=point.y;
    
    float d=min(sphereDistance,planeDistance);
    
    return d;
}

float rayMarch(vec3 rayOrigin,vec3 rayDirection){
    float d0=0.;
    
    for(int step=0;step<MAX_STEPS;step++){
        vec3 point=rayOrigin+rayDirection*d0;
        float dS=getDistance(point);
        d0+=dS;
        
        if(d0>MAX_DISTANCE||dS<SURF_DIST){
            break;
        }
    }
    
    return d0;
}


void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(0);
    
    vec3 rayOrigin=vec3(0,1.,0);
    
    vec3 rayDirection=normalize(
        vec3(
            coord.x,
            coord.y,
            1
        )
    );
    
    float marchedDistance=rayMarch(
        rayOrigin,
        rayDirection
    );
    
    marchedDistance/=30.;
    
    color=vec3(marchedDistance);
    
    gl_FragColor=vec4(color,1);
}