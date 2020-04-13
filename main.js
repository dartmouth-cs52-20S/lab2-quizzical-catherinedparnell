/* Hide all result options */
$("#machinegun").hide();
$("#messagetolove").hide();
$("#if6was9").hide();
$("#heartrain").hide();
$("#voodoochild").hide();
$("#watchtower").hide();
$("#purplehaze").hide();
$("#mojoman").hide();
$("#jamathouse").hide();
$("#error").hide();

/* When clicked change opacity for all, keep chosen at 100% */
/* Function from https://teamtreehouse.com/community/change-colour-of-label-when-relevant-radio-button-is-checked */
$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        $label = $(this).parent();
        $label.parent().parent().find('label').css('opacity', '60%');
        $label.css('opacity', '100%');
    });
});

/* Handles button to refresh quiz after completed */
$('.go-back').on('click', function(e){
    $("#machinegun").hide();
    $("#messagetolove").hide();
    $("#if6was9").hide();
    $("#heartrain").hide();
    $("#voodoochild").hide();
    $("#watchtower").hide();
    $("#purplehaze").hide();
    $("#mojoman").hide();
    $("#jamathouse").hide();
    $("#error").hide();
    $("input[type='radio']").each(function(i) {this.checked = false;});
    window.scrollTo(0,0);
});

/* Handles submit/calculations/result */
$('#submit-button').on('click', function(e) {
    console.log("i am being clicked");
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    console.log(choices.length);
    if (choices.length != 7){
        console.log("i am showing error");
        $("#error").show();
    }
    else{
        machinegun = 0;
        messagetolove = 0;
        if6was9 = 0;
        heartrain = 0;
        voodoochild = 0;
        watchtower = 0;
        purplehaze = 0;
        mojoman = 0;
        jamathouse = 0;

        word = choices[0]
        drink = choices[1]
        venue = choices[2]
        app = choices[3]
        who = choices[4]
        what = choices[5]
        cat = choices[6]

        //question 1
        switch(word){
            case "vibe":
                mojoman += 1/4;
                if6was9 += 1/4;
                messagetolove += 1/4;
                break;
            case "shred":
                voodoochild += 1/4;
                heartrain += 1/4;
                break;
            case "sick":
                jamathouse += 1/4;
                purplehaze += 1/4;
                break;
            case "rage":
                machinegun += 1/4;
                watchtower += 1/4;
                break;
        }

        //question 2
        switch(drink){
            case "tequila":
                voodoochild += 1;
                break;
            case "orangejuice":
                mojoman += 1;
                break;
            case "champagne":
                messagetolove += 1;
                break;
            case "vodka":
                heartrain += 1;
                break;
            case "coffee":
                if6was9 += 1;
                break;
            case "beer":
                jamathouse += 1;
                break;
            case "absinthe":
                purplehaze += 1;
                break;
            case "tea":
                watchtower += 1;
                break;
            case "rum":
                machinegun += 1;
                break;
        }

        //question 3
        switch(venue){
            case "woodstock":
                messagetolove += 1/4
                voodoochild += 1/4
                jamathouse += 1/4
                heartrain += 1/4
                break;
            case "fillmore":
                machinegun += 1/4
                purplehaze += 1/4
                break;
            case "atlanta":
                watchtower += 1/4
                break;
            case "record":
                if6was9 += 1/4
                mojoman += 1/4
                break;
        }

        //question 4
        switch(app){
            case "facebook":
                watchtower += 1;
                break;
            case "instagram":
                messagetolove += 1;
                break;
            case "twitter":
                if6was9 += 1;
                break;
            case "nikerunclub":
                heartrain += 1;
                break;
            case "linkedin":
                voodoochild += 1;
                break;
            case "slack":
                machinegun += 1;
                break;
            case "tiktok":
                purplehaze += 1;
                break;
            case "snapchat":
                jamathouse += 1;
                break;
            case "snackpass":
                mojoman += 1;
                break;
        }

        //question 5
        switch(who){
            case "p-hippie":
                watchtower += 1.05*2/3;
                break;
            case "n-hippie":
                mojoman += 1.05*2/3;
                purplehaze += 1.05*2/3;
                break;
            case "g-hippie":
                messagetolove += 1.05*2/3;
                break;
            case "soldier":
                machinegun += 1.05*2/3;
                heartrain += 1.05*2/3;
                break;
            case "gov-official":
                voodoochild += 1.05*2/3;
                break;
            case "nobody":
                jamathouse += 1.05*2/3;
                if6was9 += 1.05*2/3;
                break;
        }

        //question 6
        switch(what){
            case "chill":
                jamathouse += 1.05*2/3;
                break;
            case "kiss":
                messagetolove += 1.05*2/3;
                purplehaze += 1.05*2/3;
                break;
            case "riffs":
                voodoochild += 1.05*2/3;
                break;
            case "trip":
                heartrain += 1.05*2/3;
                break;
            case "protest":
                machinegun += 1.05*2/3;
                watchtower += 1.05*2/3;
                break;
            case "nothing":
                if6was9 += 1.05*2/3;
                mojoman += 1.05*2/3;
                break;
        }

        //question 7
        switch(cat){
            case "cat1":
                mojoman += 1;
                break;
            case "cat2":
                machinegun += 1;
                break;
            case "cat3":
                purplehaze += 1;
                break;
            case "cat4":
                watchtower += 1;
                break;
            case "cat5":
                if6was9 += 1;
                break;
            case "cat6":
                voodoochild += 1;
                break;
            case "cat7":
                messagetolove += 1;
                break;
            case "cat8":
                jamathouse += 1;
                break;
            case "cat9":
                heartrain += 1;
                break;
        }

        counts = [machinegun, messagetolove, if6was9, heartrain, voodoochild,
            watchtower, purplehaze, mojoman, jamathouse];
        
        max = 0;
        for(count of counts){
            if (count > max){
                max = count;
            } 
        }
        
        if (max != 0){
            switch(max){
                case machinegun:
                    $("#machinegun").show().toggleClass('fullscreen');
                    break;
                case messagetolove:
                    $("#messagetolove").show().toggleClass('fullscreen');
                    break;
                case if6was9:
                    $("#if6was9").show().toggleClass('fullscreen');
                    break;
                case heartrain:
                    $("#heartrain").show().toggleClass('fullscreen');
                    break;
                case voodoochild:
                    $("#voodoochild").show().toggleClass('fullscreen');
                    break;
                case watchtower:
                    $("#watchtower").show().toggleClass('fullscreen');
                    break;
                case purplehaze:
                    $("#purplehaze").show().toggleClass('fullscreen');
                    break;
                case mojoman:
                    $("#mojoman").show().toggleClass('fullscreen');
                    break;
                case jamathouse:
                    $("#jamathouse").show().toggleClass('fullscreen');
                    break;
            }
            $("#error").hide();
        }
    }
    /*code to scroll to end of window on reveal from Grant Dumanian*/
    window.scrollTo(0,document.body.scrollHeight);
  });