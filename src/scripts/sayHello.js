export let greet = (name) => {
    if(name === undefined || name === ''){
        return 'Hello, Friend!';
    }
    return 'Hello, ' + name;
};

export let greetTimeOfDay = (time) => {
    if(time < 12){
        return 'Good morning!';
    }
    else if(time >= 12 && time < 20){
        return 'Good afternoon!';
    }
    else if(time >= 20){
        return 'Good evening!';
    }
};
