class Activity{
    constructor(id,title,descripcion,imgUrl){
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
}
}

class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;
    }

    getallActivities(){
        return this.activities;
}

    createActivity(title,descripcion,imgUrl){
        const id = this.id++;
        const activity = new Activity(id,title,descripcion,imgUrl);
        this.activities.push(activity);
    }
}

deleteActivity(id) {
    this.activities = this.activities.filter(activity => activity.id !== id);
}