#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 getSquare(vec2 coords,vec2 start,vec2 end,vec3 color){
    vec2 leftbottom=step(start,coords);
    vec2 rightTop=step(end,1.-coords);
    return color*(leftbottom.x*leftbottom.y*rightTop.y*rightTop.x);
}

void main(){
    vec2 coords=gl_FragCoord.xy/u_resolution.xy;
    const int squares=3;
    float increments=1./float(squares);
    bool rowColor=false;
    bool columnColor=false;
    
    vec3 canvas=vec3(.0);
    
    for(int index=0;index<squares;index++){
        for(int index2=0;index2<squares;index2++){
            vec3 square=getSquare(
                coords,
                vec2(increments*float(index2),increments*float(index)),
                vec2(1.-(increments*float(index2+1)),1.-(increments*float(index+1))),
                vec3(rowColor)
            );
            canvas=mix(canvas,square,square);
            rowColor=!rowColor;
        }
        columnColor=!columnColor;
        rowColor=columnColor;
    }
    
    gl_FragColor=vec4(canvas,1.);
}