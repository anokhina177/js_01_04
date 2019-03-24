'use strict';
let mover = {
    getNextPoint(direction) {
        
        let incX = 0;
        let incY = 0;
        
        switch (direction) {
            case '2':
                incY = -1;
                break;
            case '6':
                incX =  1;
                break;
            case '8':
                incY =  1;
                break;
            case '4':
                incX = -1;
                break;
            case '1':
                incY = -1;
                incX = -1;
                break;
            case '3':
                incY = -1;
                incX =  1;
                break;
            case '7':
                incY =  1;
                incX = -1;
                break;
            case '9':
                incY =  1;
                incX =  1;
                break;
            default:
                console.log('такого направления нет')
        }
        
        let nextPoint = {
            x: player.x+incX,
            y: player.y+incY
        };

        return nextPoint;
    }
};
