import obj from '../data/games.json';
let allGames = 117;
let ratingPlayers = [];
let nonRatingPlayers = [];
let redWins = 0;
let blackWins = 0;

playerRow("Опер");
playerRow("Ёж");
playerRow("Самбука");
playerRow("Аlex Red");

playerRow("Светлячок");
playerRow("Керри");

playerRow("Мэлс");

playerRow("Пианист");

playerRow("Пряник");

playerRow("Нео");

playerRow("Тургенев");

playerRow("Дон Кихот");

playerRow("Жёлтый");

playerRow("Жена");

playerRow("Седой");

playerRow("Маваши");

playerRow("Славик");

playerRow("Харви");

playerRow("Гермес");

playerRow("Бернинг");

playerRow("Флеш");

playerRow("Самаритянка");

playerRow("Вертинский");

playerRow("Элис");

playerRow("Никки");

playerRow("Мишка");

playerRow("Деменция");

playerRow("Сова");

playerRow("Alice");

playerRow("Мак-Магон");

playerRow("Долорес");

playerRow("Микки");

playerRow("Жаклин");

playerRow("Ронни");

playerRow("Баламут");

playerRow("Фантом");

playerRow("Омон");

playerRow("Вега");

playerRow("Черника");

playerRow("Yoda");

playerRow("Мастер");

playerRow("Смайлик");

playerRow("Слайм");

playerRow("Фрозен");

playerRow("Каренина");

playerRow("Кармелитка");

playerRow("Сантос");

playerRow("Кофе");

playerRow("Капучино");

playerRow("Миледи");

playerRow("Мюри");

playerRow("Эльза");

playerRow("Q");

playerRow("Симба");

playerRow("Альпачино");

playerRow("Стейси");

playerRow("Alex Red");
playerRow("Alex");

playerRow("Зодиак");

playerRow("Кристи");

playerRow("Что-нибудь");

playerRow("Fox");

playerRow("Созерцающий");

playerRow("Граф Монте-Кристо");

playerRow("Сантехник");

playerRow("Вустер");

playerRow("Белла");

playerRow("Ассоль");

playerRow("Юстас");

playerRow("Пончик");

playerRow("Кэрри");

playerRow("Майор");

playerRow("Хасан");

playerRow("Мосби");

playerRow("Джонс");

playerRow("Донскoff");

playerRow("Правда");

playerRow("Чашка");
playerRow("Мерида");

playerRow("Повелитель Шаров");

playerRow("Вэйд");

playerRow("Кushtar-star");

playerRow("Боттичелли");

playerRow("Шурик");

playerRow("Классик");

playerRow("Backspace");

playerRow("Собака");

playerRow("Blackman");

playerRow("Ариец");

playerRow("МакSим");

playerRow("Леха");

playerRow("Витаминка");

playerRow("Щегол");

playerRow("Кот");

playerRow("Сатурн");

playerRow("Гансалес");

playerRow("Энгри Доги-Дог");

playerRow("Антон");

playerRow("Еж");

playerRow("Фриц");

playerRow("Алиса");

playerRow("Батон");

playerRow("Мистер Грин");

playerRow("Бон");

playerRow("Слон");

playerRow("Тутси");

playerRow("Оборотень");

playerRow("Эйк");

playerRow("Шед");

playerRow("Америка");

playerRow("Ауф");

playerRow("Сэм");

playerRow("Эспаньола");

playerRow("Желанная");

playerRow("Алекс");

playerRow("Летом");

playerRow("Эмили");

playerRow("Законник");

playerRow("Бандитка");

playerRow("Ветерок");

playerRow("Шпион");

playerRow("Вавилон");

playerRow("Вандам");

playerRow("Колледжио");

playerRow("Изи-Бризи");

playerRow("Джовани");
playerRow("Аспин");


export function playerRow(nick) {
    let player = {};
    let number = 0, games = 0, wins = 0, sher = 0, sherWins = 0, mir = 0, mirWins = 0, don = 0, donWins = 0, maf = 0, mafWins = 0, py = 0, lx = 0, points = 0, result = 0;
    for (let i = 1; i <= allGames; i++) {
        if (Object.values(obj[i]).indexOf(nick) !== -1) {
            number = Object.values(obj[i]).indexOf(nick) + 1;
            games++;
            if (number == obj[i]["дон"]) {
                don++;
                obj[i]["победа"] == "маф" ? donWins++ : '';
                obj[i]["победа"] == "маф" ? wins++ : '';
                obj[i]["победа"] == "маф" ? blackWins+=0.5 : '';
            } else if (number == obj[i]["маф1"] || number == obj[i]["маф2"]) {
                maf++;
                obj[i]["победа"] == "маф" ? mafWins++ : '';
                obj[i]["победа"] == "маф" ? wins++ : '';
                obj[i]["победа"] == "маф" ? blackWins+=0.25 : '';
            } else if (number == obj[i]["шериф"]) {
                sher++;
                obj[i]["победа"] == "мир" ? sherWins++ : '';
                obj[i]["победа"] == "мир" ? wins++ : '';
                obj[i]["победа"] == "мир" ? redWins+=0.5 : '';
            } else {
                mir++;
                obj[i]["победа"] == "мир" ? mirWins++ : '';
                obj[i]["победа"] == "мир" ? wins++ : '';
                obj[i]["победа"] == "мир" ? redWins+=1/12 : '';
            }
            if (obj[i]["пу"] == number) {
                py++;
                lx += +(obj[i]["лх"]);
            }
        }
        points = wins + +(lx);
        result = Math.round(points/games * 10000)/100;
    }
    if (allGames*0.15> games){
        player.code = `<tr class='gray'>
            <td class='nick'>${nick}</td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    } else {
        player.code = `<tr>
            <td class='nick'>${nick}</td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    }
    player.value = result;
    player.nick = nick;
    player.games = games;
    player.sher = sher;
    player.sherWins = sherWins;
    player.sher = sher;
    player.mir = mir;
    player.mirWins = mirWins;
    player.don = don;
    player.donWins = donWins;
    player.maf = maf;
    player.mafWins = mafWins;
    player.py = py;
    player.lx = lx;
    player.points = points;
    player.result = result;

    if (allGames*0.15 <= games) {
        ratingPlayers.push(player);
    } else if (allGames/20 <= games){
        nonRatingPlayers.push(player);
    }

    for (let i = 1; i < ratingPlayers.length; i++) {

        for (let j = 1; j < ratingPlayers.length; j++) {

            if( ratingPlayers[j].value > ratingPlayers[j-1].value ){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            }
        }
    }
    for (let i = 1; i < nonRatingPlayers.length; i++) {

        for (let j = 1; j < nonRatingPlayers.length; j++) {

            if( nonRatingPlayers[j].games > nonRatingPlayers[j-1].games ){
                var temp = nonRatingPlayers[j];
                nonRatingPlayers[j] = nonRatingPlayers[j-1];
                nonRatingPlayers[j-1] = temp;
            }
        }
    }
}

export {ratingPlayers, nonRatingPlayers, allGames, redWins, blackWins};
