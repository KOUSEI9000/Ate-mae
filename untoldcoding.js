const text = 
" It feels weird to write a letter to the person you were just with....I thought you were a terrible person. Noisy,hyper and especially it seems like you're not paying too much attention in anything. I didn't even remember that we met when we were grade 9 lol even though some of my classmates asked your name well, I can't blame myself I'm not interested to any woman at that time (kasi naman di ko alam if mataas talaga standard ko or may hinahanap ako that time lol). When we were grade 10 Luke (dati sana nating classmate) and  Rodric told me that we already met but I still couldn't remember at that time.I'll be honest I don't like you at first but I don't know what was the real reason why it turns to be like this where I'm so inlove with you maybe because your smart,beautiful or maybe it's the way you talked to me. I don't need a reason why I was so inlove with you lol. Ganda ganda mo pala kausap ibang-iba ka teh sa personal tapos kapag nag-uusap tayo sa online lol. Sorry sa mga nagawa ko ahh sorry talaga. Alam ko naman na hindi ako mganda kausap pero sana kahit papa-ano nag enjoy ka din lol. I like you but maybe this is it lol. I really want to be closer to you but I can't it seems like that your friends are  against me lol I think they didn't like me to be with you well I can't blame them I also even hate myself lol. I'm feeling bad for Jhoevet and Paulo since sir Jake keep teasing you about me maybe if I didn't fall inlove with you maybe they had a huge chance to show you how much they love you. I know youre happy when you are with Jhoevet especially when youre with Paulo kitang kita naman nung nagprapractice nung copmpletion kapag wala si Robert tapos gaggawin yung processional lol hahahah.Sabagay ganda ganda kausap/kasama si Pulo (di masyado kay vet madrama minsan eh medjo na aano ako) Sayang saya kayo lol but dont me, at that time tanggap ko naman na mas masaya ka with someone else as expected lol.Di ko alam if pano ako lalapit sayo dati as in di ko kaya. Gusto sana kita lapitan kapag nag-iisa kalang dati,kapag nagkikita kita tayo for practice, or makisabay sainyo pauwi or papuntang canteen pero wala eh dami dami ko sanang naisip na paraan para lumapit sayo kaso as expected hanggang titig lang ako sayo lol.Sayang sana magka-usap pa sana tayo ngayon kaso umayaw ka pero I para sa ikabubuti naman to since if mag-uusap pa tayo mas malaki ang chance na ma-attach lang ulit tayo sa isa't-isa edi mas mahihirapan tayo niyan lol. Pero di ko alam kung totoo yung mga sinasabi nila archelle na kesyo crush mo daw si paulo or rovic (nadidinig ko habang  processionals) but  all goods if isa sakanila crush mo lol, buti nga yan atleast mas mabilis mong malilimutan na nag-usap tayo hehe. Nung Valentines Day sana talaga lalapitan kita since nag-iisa ka that time kaso umandar nanaman katorpehan ko hayss gustong gusto kita lapitan that time hays.Thank you sa lahat ng mga kwento mo saakin padi ko lamatsuuu. It's strange that I almost remember everything right? How about you? I hope that I found my place in your heart.I hope you'll remember me, even just a little bit.I dont want to reset what we had (especially the good memories if we had lol) Don't forget about me,will you promise me that you won't forget about me? I'm glad it was you Cindy Mae Rodriguez,padi ko,padi,boss,love... I'm sorry I couldn't make my promises.Sorry kung binibira kita.Sorry kung tinatarayan kita. I'm sorry if you think I didn't appreciate you and your actions.I''m really sorry! I'm sorry for a million times, Thank you!Sorry talaga teh nagkaroon kapa ng sakit ng ulo s mga nagawa ko sayo gomenasai, sorry talaga ah  pero supoer duper worth it na umamin ako sayo at nakipagchat tbh. Ganda  ganda mo kausap as in tapos hehe galing galing magpakilig ah hahahhaha.P.S. Di ko  inaano na parang mas gusto mo sina paulo ah susko ka baka yun naman isipin mo lol.Saka okay na din ata yung umayaw ka na makipag-usap sakin bago pa mag-end ng SY para na din di na tayo ma-attach masyado sa isa't-isa lol. Sorry talaga sa mga nagawa ko sayo hayst. Kaya ko sana maghintay ng 2 years kaso ang di ko alam if ever man na magiging same padin yung feelings ko sayo if ever man na mainlove ulit ako sayo di ko sure if ganto pa kalala lol. Hoping na dito ka mag college.Goodluck Ate Mae sa pag-aaral mo alam ko namang kayang kaya mo yan sus ikaw pa if ever man na naiisip mong sumuko isipin mo lang na malalagpasan mo din to tas wag na wag mong isipin na di mo kaya yung mga gawain susko ka.  Take care po ate ah THE FIREWORKS IS BEAUTIFUL,isn't it? Sana kasama ka sa picture kahapon nung sa processional haha for remembrance dude ganda ganda mo kahapon ate Mae promise.  Sayonara! Babush! Until we meet again my one and only ate mae! Wag mo sana akong i-unfriend/block hays.Goodluck,godbless,ingat. If ever man na makahanap ka ng gusto mong tao go mo na te promise, di ko sinasabing sagutin mo agad ah I mean bigyan mo din ng chance para makalapit sayo or maka ano sayo personally. If ever man may nagkakagusto sayo wag mo namang iwasan or something medjo panget sa perspective/point of view ng nagkakagusto sayo.Hayaan mo lang tas try mo din bigyan ng chance, di ko sinasabing jowai. mo sh hwat K mean is let him cook haha hayaan mong ipakita niya na worth it siya na maging bf mo lol.Thank you for everything especially for the memories.One last time I like you ate Mae!(I think it won't last anymore babye!) Thank you and sorry ";

const paragraph = text.split("");

let i = 5;


function dashOut(arr) {
    if (i < arr.length) {
     console.log(arr[i]);
     document.querySelector(".textCont").textContent += arr[i];
     
     i++;
     console.log("The i count: " + i);
     setTimeout(function () {
        dashOut(arr);
     }, interval(arr[i]));
     }
    }

    function interval(letter) {
        console.log(letter);
        if (letter == ";" || letter == "." || letter ==",") {
            return Math.floor(Math.random() * 500 + 500);
        } else {
            return Math.floor(Math.random() *130 + 5);
        }
    }

    function startFromBegin() {
        i = 0;
        dashOut(paragraph);
    }

    startFromBegin();
