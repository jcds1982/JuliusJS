function FlipCard(Id, innerId){

    document.getElementById(innerId).classList.toggle('mailslot__expand_innercard');
    document.getElementById(Id).classList.toggle('mailslot__flip_hold');
    
}