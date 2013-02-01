#pragma strict

public var me:GameObject;
//public var grabKey:KeyCode;
private var grabObj:boolean = false;
private var hitObj:GameObject;
private var hit : RaycastHit;
 
function Start () {
	//Debug.Log("This " + this.name + "\nme = " + me.name);
}

function Update() {
 
    if(Physics.Raycast (transform.position,transform.forward, hit, 5)) {
        if(hit.collider.gameObject && Input.GetMouseButtonDown(0) && grabObj == false) {
        	if(hit.collider.gameObject !== me)
        	{
				hitObj = hit.collider.gameObject;
				grabObj = true;
			}
        } else if(Input.GetMouseButtonDown(0) && grabObj == true) {
			grabObj = false;
		}
    }
 
    if(grabObj) {
        //Moving object with player, 2 units in front of him cause we want to see it.

		hitObj.transform.position.x = gameObject.transform.position.x + 2;
		hitObj.transform.position.y = gameObject.transform.position.y;
		hitObj.transform.position.z = gameObject.transform.position.z + 2;

		Debug.Log ("Grabbed " + hitObj.transform.name);
	} else {
		//Debug.Log("Nothing Grabbed");
	}
}
/*
        if(Input.GetKeyDown(KeyCode.J)) {
        	Debug.Log("key down");
        }
        if(hit.collider.gameObject && Input.GetKeyDown(grabKey) && grabObj == false) {
        } else if(Input.GetKeyUp(grabKey) && grabObj == true) {
*/