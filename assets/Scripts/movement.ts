
import { Vec3 } from 'cc';
import { UITransform } from 'cc';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Movement
 * DateTime = Wed Sep 01 2021 15:23:20 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = movement.ts
 * FileBasenameNoExtension = movement
 * URL = db://assets/Scripts/movement.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Movement')
export class Movement extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property
    speed : number = 10;
    @property
    ang : number = 10;

    start ()
    {

    }

    onLoad()
    {

    }

    update(dt)
    {
        this.node.setPosition(this.node.position.x+this.speed*dt,this.node.position.y);
        this.node.angle += this.ang;
        //this.node.scale += 0.001;
        this.node.setScale(new Vec3(0.5,1,0));
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
