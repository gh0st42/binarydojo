var m_w = 123456789;
var m_z = 987654321;
var mask = 0xffffffff;

// Takes any integer
function seed(i) {
  m_w = (123456789 + i) & mask;
  m_z = (987654321 - i) & mask;
}

// Returns number between 0 (inclusive) and 1.0 (exclusive),
// just like Math.random().
function random() {
  m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
  m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
  var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
  result /= 4294967296;
  return result;
}

// convert seconds to minutes and seconds
function secondsToMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

let context = null;

const beep = (freq = 520, duration = 200, vol = 100) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = "square";
  gain.connect(context.destination);
  gain.gain.value = vol * 0.01;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * 0.001);
}

const gojuryu = [
  "Geki Sai Dai Ichi",
  "Geki Sai Dai Ni",
  "Tensho",
  "Sanchin",
  "Saifa",
  "Seiyunchin",
  "Shisochin",
  "Seipai",
  "Kururunfa",
  "Suparinpei",
  "Seisan",
  "Sanseiru",
];

const wadoryu = [
  "Pinan Shodan",
  "Pinan Nidan",
  "Pinan Sandan",
  "Pinan Yondan",
  "Pinan Godan",
  "Kushanku",
  "Naihanchi",
  "Seishan",
  "Chinto",
  "Rohai",
  "Wanshu",
  "Jion",
  "Jitte",
  "Bassai",
  "Niseishi",


];
const shotokan = [
  "Heian Shodan",
  "Heian Nidan",
  "Heian Sandan",
  "Heian Yondan",
  "Heian Godan",
  "Tekki Shodan",
  "Tekki Nidan",
  "Tekki Sandan",
  "Bassai Dai",
  "Bassai Sho",
  "Kanku Dai",
  "Kanku Sho",
  "Empi",
  "Hangetsu",
  "Jion",
  "Jitte",
  "Jiin",
  "Gankaku",
  "Sochin",
  "Nijushiho",
  "Chinte",
  "Meikyo",
  "Unsu",
  "Gojushiho Dai",
  "Gojushiho Sho",
  "Wankan",
];

const katas = {
  "shotokan": shotokan,
  "gojuryu": gojuryu,
  "wadoryu": wadoryu,
};