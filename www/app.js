import { TextToSpeech } from '@capacitor-community/text-to-speech';

const subjects={
 math:{title:"Toán vui",emoji:"🔢",intro:"Đếm, tính toán và nhận biết hình khối.",topics:["Tất cả","Đếm số","Phép tính","Hình học"],questions:[
 {topic:"Đếm số",art:"🍎 🍎 🍎",q:"Có mấy quả táo?",a:["2 quả","3 quả","4 quả","5 quả"],correct:1,hint:"Cùng đếm từng quả nhé!"},
 {topic:"Đếm số",art:"🐟 🐟 🐟 🐟",q:"Có 4 con cá, thêm 1 con cá. Có tất cả mấy con?",a:["4 con","5 con","6 con","3 con"],correct:1,hint:"Đếm tiếp sau số 4 nào!"},
 {topic:"Phép tính",art:"🌟 + 🌟",q:"1 + 1 bằng mấy?",a:["1","2","3","4"],correct:1,hint:"Gộp hai ngôi sao lại nhé."},
 {topic:"Phép tính",art:"🍪 🍪 🍪",q:"Có 3 chiếc bánh, ăn 1 chiếc. Còn mấy chiếc?",a:["1 chiếc","2 chiếc","3 chiếc","4 chiếc"],correct:1,hint:"Bớt đi 1 là phép trừ."},
 {topic:"Hình học",art:"🔺　🟦　⚪",q:"Hình nào có 3 cạnh?",a:["Hình tròn","Hình vuông","Hình tam giác","Hình chữ nhật"],correct:2,hint:"Hãy đếm số cạnh của mỗi hình."},
 {topic:"Phép tính",art:"2️⃣ + 3️⃣",q:"2 + 3 bằng mấy?",a:["4","5","6","3"],correct:1,hint:"Đếm 2 rồi thêm 3 bước."}]},
 viet:{title:"Tiếng Việt",emoji:"📚",intro:"Làm quen chữ cái, từ ngữ và câu hay.",topics:["Tất cả","Chữ cái","Từ ngữ","Câu hay"],questions:[
 {topic:"Chữ cái",art:"🅱️",q:"Từ “bà” bắt đầu bằng chữ nào?",a:["a","b","m","t"],correct:1,hint:"Bà và bé cùng bắt đầu bằng âm b."},
 {topic:"Từ ngữ",art:"🐱",q:"Con vật này được gọi là gì?",a:["Con chó","Con mèo","Con vịt","Con gà"],correct:1,hint:"Con vật kêu meo meo."},
 {topic:"Chữ cái",art:"🍌",q:"Từ “chuối” bắt đầu bằng âm nào?",a:["ch","tr","kh","th"],correct:0,hint:"Chuối có âm đầu là ch."},
 {topic:"Câu hay",art:"☀️ 🌞",q:"Buổi sáng, em thường nói lời chào nào?",a:["Chúc ngủ ngon","Xin chào","Tạm biệt","Hẹn mai"],correct:1,hint:"Một lời chào thân thiện."},
 {topic:"Từ ngữ",art:"🌸",q:"Từ nào chỉ một loài hoa?",a:["Bàn","Hoa hồng","Cái cốc","Quyển vở"],correct:1,hint:"Hoa hồng có cánh và hương thơm."}]},
 nature:{title:"Khám phá tự nhiên",emoji:"🌱",intro:"Tìm hiểu thời tiết, Trái Đất và môi trường.",topics:["Tất cả","Thời tiết","Trái Đất","Môi trường"],questions:[
 {topic:"Thời tiết",art:"☀️",q:"Mặt Trời giúp ban ngày có điều gì?",a:["Ánh sáng","Tuyết rơi","Trời tối","Mưa đá"],correct:0,hint:"Mặt Trời chiếu sáng và sưởi ấm Trái Đất."},
 {topic:"Trái Đất",art:"🌍",q:"Chúng ta đang sống trên đâu?",a:["Mặt Trăng","Sao Hỏa","Trái Đất","Mặt Trời"],correct:2,hint:"Hành tinh xanh của chúng ta."},
 {topic:"Môi trường",art:"♻️",q:"Rác nên được bỏ ở đâu?",a:["Dưới sông","Trên đường","Trong thùng rác","Trong vườn hoa"],correct:2,hint:"Bỏ rác đúng nơi giúp môi trường sạch đẹp."},
 {topic:"Thời tiết",art:"🌧️ ☂️",q:"Khi trời mưa, vật gì giúp che mưa?",a:["Cái quạt","Ô/dù","Kính lúp","Cái thìa"],correct:1,hint:"Nhớ mang theo khi ra ngoài trời mưa nhé."},
 {topic:"Trái Đất",art:"🌙 ⭐",q:"Ta thường nhìn thấy Mặt Trăng rõ nhất khi nào?",a:["Ban đêm","Giữa trưa","Trong lớp","Dưới biển"],correct:0,hint:"Mặt Trăng thường được nhìn thấy trên bầu trời đêm."}]},
 life:{title:"Thế giới sinh vật",emoji:"🐾",intro:"Khám phá động vật, thực vật và cơ thể.",topics:["Tất cả","Động vật","Thực vật","Cơ thể"],questions:[
 {topic:"Động vật",art:"🐟",q:"Con vật nào sống dưới nước?",a:["Con mèo","Con cá","Con gà","Con thỏ"],correct:1,hint:"Cá dùng mang để lấy oxy trong nước."},
 {topic:"Thực vật",art:"🌱 💧 ☀️",q:"Cây cần gì để lớn lên?",a:["Nước và ánh sáng","Kẹo","Đồ chơi","Giày dép"],correct:0,hint:"Cây thường cần nước, ánh sáng, không khí và chất dinh dưỡng."},
 {topic:"Động vật",art:"🦋",q:"Con vật nào có cánh và thường hút mật hoa?",a:["Bướm","Cá voi","Rùa","Ếch"],correct:0,hint:"Bướm thường bay quanh những bông hoa."},
 {topic:"Cơ thể",art:"👀",q:"Bộ phận nào giúp em nhìn?",a:["Tai","Mũi","Mắt","Bàn chân"],correct:2,hint:"Chúng ta dùng mắt để nhìn."},
 {topic:"Động vật",art:"🐸",q:"Con vật nào thường kêu ộp ộp?",a:["Ếch","Mèo","Gà","Chim sẻ"],correct:0,hint:"Ếch thường sống gần nơi ẩm ướt."}]},
 world:{title:"Kiến thức quanh em",emoji:"🌍",intro:"Học kỹ năng sống, an toàn và cộng đồng.",topics:["Tất cả","An toàn","Đời sống","Cộng đồng"],questions:[
 {topic:"An toàn",art:"🚦🔴",q:"Đèn giao thông màu đỏ có nghĩa là gì?",a:["Đi nhanh","Dừng lại","Chạy qua","Rẽ tùy ý"],correct:1,hint:"Luôn tuân theo tín hiệu giao thông cùng người lớn."},
 {topic:"Đời sống",art:"🧼 👐",q:"Trước khi ăn, em nên làm gì?",a:["Rửa tay","Chạm đất","Chạy quanh","Đi ngủ"],correct:0,hint:"Rửa tay bằng xà phòng giúp giữ vệ sinh."},
 {topic:"Cộng đồng",art:"🙏",q:"Khi được giúp đỡ, em nên nói gì?",a:["Không nghe","Cảm ơn","Đi đi","Không biết"],correct:1,hint:"Nói lời cảm ơn thể hiện sự lịch sự."},
 {topic:"An toàn",art:"👨‍👩‍👧",q:"Nếu bị lạc ở nơi đông người, em nên làm gì?",a:["Đi theo người lạ","Chạy ra đường","Tìm nhân viên an ninh hoặc người lớn đáng tin cậy","Trốn đi"],correct:2,hint:"Ở nơi an toàn và nhờ người có trách nhiệm giúp đỡ."},
 {topic:"Đời sống",art:"🪥",q:"Việc nào giúp giữ răng sạch?",a:["Đánh răng","Ăn kẹo cả ngày","Không uống nước","Dùng tay chà"],correct:0,hint:"Đánh răng đều đặn với sự hướng dẫn của người lớn."}]}
};
let state={stars:0,done:0,correct:0,answered:[],sound:true};try{state={...state,...JSON.parse(localStorage.getItem("beHocVui")||"{}")}}catch(e){}
let subjectKey="math",topic="Tất cả",questionIndex=0,selected=null,checked=false,roundQuestions=[];
const $=id=>document.getElementById(id);
function save(){localStorage.setItem("beHocVui",JSON.stringify(state));updateProgress()}
function updateProgress(){$("starCount").textContent=state.stars;$("doneCount").textContent=state.done;$("progressBar").style.width=Math.min(100,state.done*4)+"%";$("levelNum").textContent=Math.floor(state.stars/5)+1;$("statStars").textContent=state.stars;$("statDone").textContent=state.done;$("statCorrect").textContent=state.correct;$("achievementText").textContent=state.done===0?"Hoàn thành câu hỏi đầu tiên để nhận ngôi sao nhé!":state.stars>=10?"Tuyệt vời! Bé đã có ít nhất 10 ngôi sao. Hãy tiếp tục khám phá!":`Bé đã thử sức ${state.done} câu. Mỗi lần cố gắng đều rất đáng khen!`}
function showScreen(name){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===name));document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("selected",b.dataset.screen===name));if(name==="progress")updateProgress();window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));
document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>startSubject(b.dataset.subject));
$("backHome").onclick=()=>showScreen("home");
function startSubject(key){subjectKey=key;topic="Tất cả";questionIndex=0;const s=key==="mixed"?makeMixed():subjects[key];$("subjectTitle").textContent=key==="mixed"?"Đố vui tổng hợp":s.title;$("subjectIntro").textContent=key==="mixed"?"Cùng thử sức với nhiều chủ đề nhé!":s.intro;$("subjectEmoji").textContent=key==="mixed"?"🎯":s.emoji;$("subjectEyebrow").textContent="CÙNG HỌC NÀO";renderFilters(s);prepareQuestions();showScreen("learn");renderQuestion()}
function makeMixed(){let qs=[];Object.keys(subjects).forEach(k=>subjects[k].questions.forEach(q=>qs.push({...q,subject:k})));return{title:"Đố vui tổng hợp",emoji:"🎯",intro:"Cùng thử sức với nhiều chủ đề nhé!",topics:["Tất cả",...new Set(qs.map(q=>q.topic))],questions:qs}}
function currentSubject(){return subjectKey==="mixed"?makeMixed():subjects[subjectKey]}
function renderFilters(s){$("topicFilters").innerHTML="";s.topics.forEach(t=>{let b=document.createElement("button");b.className="filter"+(t===topic?" selected":"");b.textContent=t;b.onclick=()=>{topic=t;questionIndex=0;renderFilters(currentSubject());prepareQuestions();renderQuestion()};$("topicFilters").appendChild(b)})}
function beep(freq){try{let ctx=new(window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=freq;g.gain.value=.04;o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.12)}catch(e){}}
$("soundBtn").onclick=()=>{state.sound=!state.sound;$("soundBtn").textContent=state.sound?"🔊":"🔇";save();toast(state.sound?"Đã bật âm thanh":"Đã tắt âm thanh")};
function toast(t){$("toast").textContent=t;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1800)}
$("resetBtn").onclick=()=>{if(confirm("Bé và người lớn có muốn đặt lại toàn bộ tiến trình không?")){state={stars:0,done:0,correct:0,answered:[],sound:true};save();$("soundBtn").textContent="🔊";toast("Đã đặt lại tiến trình")}};
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
updateProgress();

// Mở rộng ngân hàng câu hỏi và chế độ học theo lứa tuổi.
const extraQuestions={
 math:[
 {topic:"Đếm số",art:"🦋 🦋 🦋 🦋 🦋",q:"Có 5 con bướm, thêm 2 con. Có tất cả bao nhiêu con?",a:["6 con","7 con","8 con","5 con"],correct:1,hint:"Bắt đầu từ 5 rồi đếm thêm 2.",age:"7-8",difficulty:2},
 {topic:"Phép tính",art:"🍓🍓🍓🍓🍓🍓",q:"Có 6 quả dâu, bé ăn 2 quả. Còn lại mấy quả?",a:["3 quả","5 quả","4 quả","2 quả"],correct:2,hint:"Lấy 6 bớt đi 2.",age:"7-8",difficulty:2},
 {topic:"Hình học",art:"🟦 🔺 ⚪ 🟦",q:"Trong dãy này, hình nào có 4 cạnh bằng nhau?",a:["Hình tròn","Hình vuông","Hình tam giác","Hình bầu dục"],correct:1,hint:"Hình vuông có 4 cạnh bằng nhau.",age:"7-8",difficulty:2},
 {topic:"Phép tính",art:"🧺 🍎🍎🍎🍎🍎🍎🍎🍎",q:"8 quả táo chia đều vào 2 giỏ. Mỗi giỏ có mấy quả?",a:["2 quả","3 quả","4 quả","6 quả"],correct:2,hint:"Chia thành hai nhóm bằng nhau.",age:"9-10",difficulty:3},
 {topic:"Phép tính",art:"🔢 15 − 7 = ?",q:"15 − 7 bằng bao nhiêu?",a:["7","8","9","6"],correct:1,hint:"Từ 15 đếm lùi 7 bước.",age:"9-10",difficulty:3},
 {topic:"Đếm số",art:"🪙 🪙 🪙 🪙",q:"Mỗi đồng xu trị giá 2 điểm. 4 đồng xu được bao nhiêu điểm?",a:["6 điểm","8 điểm","4 điểm","10 điểm"],correct:1,hint:"Cộng 2 + 2 + 2 + 2.",age:"9-10",difficulty:3}
 ],
 viet:[
 {topic:"Chữ cái",art:"🐘 📖",q:"Từ “voi” có âm đầu là gì?",a:["v","b","t","m"],correct:0,hint:"Voi bắt đầu bằng âm v.",age:"5-6",difficulty:1},
 {topic:"Từ ngữ",art:"🌧️ ➕ 🌈",q:"Từ nào gần nghĩa với “dũng cảm”?",a:["Nhút nhát","Can đảm","Buồn ngủ","Vội vàng"],correct:1,hint:"Người dũng cảm không dễ lùi bước trước điều khó.",age:"9-10",difficulty:3},
 {topic:"Câu hay",art:"🧒 🤝 🧒",q:"Bạn làm rơi bút, em nên nói gì?",a:["Mặc kệ bạn","Bạn thật vụng","Để mình nhặt giúp nhé","Không được nhặt"],correct:2,hint:"Lời nói tử tế thể hiện sự quan tâm.",age:"7-8",difficulty:2},
 {topic:"Từ ngữ",art:"🐦 🌳",q:"Từ nào chỉ hoạt động của chim?",a:["Bay","Xanh","Mềm","Tròn"],correct:0,hint:"Từ chỉ hoạt động trả lời câu hỏi làm gì?",age:"7-8",difficulty:2}
 ],
 nature:[
 {topic:"Thời tiết",art:"☁️ 🌧️ 🌱",q:"Sau cơn mưa, cây thường nhận được điều gì?",a:["Nước","Kẹo","Giấy","Đồ chơi"],correct:0,hint:"Nước là một yếu tố cần thiết cho cây.",age:"5-6",difficulty:1},
 {topic:"Môi trường",art:"🗑️ ♻️ 🧴",q:"Chai nhựa sạch nên được làm gì nếu nơi em sống có phân loại rác?",a:["Bỏ xuống sông","Đem phân loại tái chế","Chôn ở sân chơi","Đốt tùy ý"],correct:1,hint:"Làm theo hướng dẫn phân loại rác của địa phương.",age:"9-10",difficulty:3},
 {topic:"Trái Đất",art:"🌞 ➡️ 🌍",q:"Điều gì tạo ra ngày và đêm trên Trái Đất?",a:["Trái Đất tự quay","Mây chạy","Mặt Trăng đổi màu","Cây lớn lên"],correct:0,hint:"Trái Đất quay quanh trục của mình.",age:"9-10",difficulty:3},
 {topic:"Thời tiết",art:"🌡️ ☀️",q:"Dụng cụ nào thường dùng để đo nhiệt độ?",a:["Nhiệt kế","La bàn","Thước kẻ","Kính lúp"],correct:0,hint:"Nhiệt kế cho biết nóng hay lạnh đến mức nào.",age:"7-8",difficulty:2}
 ],
 life:[
 {topic:"Động vật",art:"🐣 🐔",q:"Gà con nở ra từ đâu?",a:["Quả trứng","Hòn đá","Lá cây","Đám mây"],correct:0,hint:"Gà là động vật đẻ trứng.",age:"5-6",difficulty:1},
 {topic:"Thực vật",art:"🌰 ➡️ 🌱 ➡️ 🌳",q:"Hạt có thể phát triển thành gì khi có điều kiện phù hợp?",a:["Cây non","Viên sỏi","Đám mây","Con cá"],correct:0,hint:"Hạt nảy mầm rồi phát triển thành cây.",age:"7-8",difficulty:2},
 {topic:"Động vật",art:"🐬 🌊",q:"Cá heo sống ở biển và thở bằng gì?",a:["Mang như cá","Phổi, nên phải ngoi lên lấy không khí","Da","Vây"],correct:1,hint:"Cá heo là động vật có vú.",age:"9-10",difficulty:3},
 {topic:"Cơ thể",art:"🫁 ❤️",q:"Cơ quan nào bơm máu đi khắp cơ thể?",a:["Tim","Dạ dày","Tai","Đầu gối"],correct:0,hint:"Tim co bóp để đưa máu đi khắp cơ thể.",age:"9-10",difficulty:3}
 ],
 world:[
 {topic:"An toàn",art:"🚸 👩‍👦",q:"Khi qua đường, bé nên làm gì?",a:["Tự chạy qua","Nắm tay người lớn và quan sát tín hiệu","Vừa đi vừa nhìn điện thoại","Chạy theo bóng"],correct:1,hint:"Qua đường ở nơi phù hợp cùng người lớn đáng tin cậy.",age:"5-6",difficulty:1},
 {topic:"Đời sống",art:"🧴 👐 💧",q:"Khi nào nên rửa tay?",a:["Trước khi ăn và sau khi đi vệ sinh","Chỉ khi tay nhìn rất bẩn","Không bao giờ","Chỉ vào cuối tuần"],correct:0,hint:"Rửa tay đúng lúc giúp phòng tránh mầm bệnh.",age:"7-8",difficulty:2},
 {topic:"Cộng đồng",art:"🧑‍🚒 🚑 👩‍⚕️",q:"Ai thường giúp chữa bệnh cho mọi người?",a:["Bác sĩ","Phi công","Thợ mộc","Nhạc sĩ"],correct:0,hint:"Bác sĩ chăm sóc và điều trị người bệnh.",age:"5-6",difficulty:1},
 {topic:"An toàn",art:"📱 👨‍👩‍👧",q:"Nếu người lạ rủ đi theo mà không có người thân, bé nên làm gì?",a:["Đi theo ngay","Từ chối và tìm người lớn đáng tin cậy","Giấu gia đình","Nhận quà rồi đi"],correct:1,hint:"Không đi theo người lạ; tìm người lớn đáng tin cậy để giúp.",age:"7-8",difficulty:2}
 ]
};
Object.keys(extraQuestions).forEach(k=>subjects[k].questions.push(...extraQuestions[k]));

let learningMode = "learn";
const lessonNotes = {
  math: { title: "Cùng đếm thật vui!", text: "Hãy chỉ vào từng hình và đếm chậm rãi. Khi làm phép cộng, mình thêm vào; khi làm phép trừ, mình bớt đi. Bé có thể dùng ngón tay hoặc đồ vật thật để luyện tập." },
  viet: { title: "Chơi cùng chữ và từ", text: "Đọc từ từ, nghe âm đầu rồi thử nói thành tiếng. Bé có thể tìm một đồ vật quanh mình có cùng âm đầu. Mỗi từ mới là một điều thú vị!" },
  nature: { title: "Nhà khoa học tí hon", text: "Quan sát bầu trời, cây cối và môi trường quanh em. Hãy tự hỏi: Mình nhìn thấy gì? Điều gì đã thay đổi? Nhớ khám phá ngoài trời cùng người lớn nhé." },
  life: { title: "Bạn thân của muôn loài", text: "Mỗi loài sinh vật có những đặc điểm riêng. Quan sát hình dáng, nơi sống và cách chúng phát triển. Hãy đối xử nhẹ nhàng với động vật và không chạm vào loài lạ." },
  world: { title: "Kỹ năng nhỏ, an toàn lớn", text: "Học cách giữ vệ sinh, nói lời lịch sự và nhận biết tình huống cần người lớn giúp đỡ. Khi không chắc chắn, hãy dừng lại và hỏi người lớn đáng tin cậy." },
  mixed: { title: "Thử thách khám phá", text: "Mỗi câu hỏi là một cơ hội để quan sát, suy nghĩ và thử lại. Đọc kỹ câu hỏi, tìm manh mối trong hình rồi chọn đáp án phù hợp nhé!" }
};

function prepareQuestions() {
  const all = currentSubject().questions || [];
  const age = $("ageSelect") ? $("ageSelect").value : "7-8";
  const difficulty = Number($("difficultySelect") ? $("difficultySelect").value : 2);
  let filtered = all.filter(q => (!q.age || q.age === age) && (!q.difficulty || Number(q.difficulty) === difficulty));
  if (topic !== "Tất cả") filtered = filtered.filter(q => q.topic === topic);
  if (!filtered.length && topic !== "Tất cả") filtered = all.filter(q => q.topic === topic);
  if (!filtered.length) filtered = all;
  roundQuestions = [...filtered].sort(() => Math.random() - 0.5);
}

function renderLesson(q) {
  const note = lessonNotes[subjectKey] || lessonNotes.mixed;
  $("lessonArt").textContent = q.art || currentSubject().emoji || "🌟";
  $("lessonTitle").textContent = q.lessonTitle || note.title;
  const extra = q.lesson || q.hint || "Quan sát hình minh họa và cùng người lớn khám phá thêm nhé.";
  $("lessonText").textContent = `${note.text} ${extra} Cùng tìm hiểu: ${q.q}`;
  $("speakBtn").disabled = false;
  $("speakBtn").textContent = "🔊 Nghe bài học";
}

function renderQuestion() {
  if (!roundQuestions || !roundQuestions.length) prepareQuestions();
  const q = roundQuestions[questionIndex % roundQuestions.length];
  if (!q) {
    $("questionText").textContent = "Bé hãy chọn một chủ đề để bắt đầu nhé!";
    $("answers").replaceChildren();
    renderLesson({art:"🌟",q:"Chọn một chủ đề thú vị nhé!",hint:"Mỗi ngày khám phá một điều mới."});
    return;
  }
  selected = null;
  checked = false;
  $("questionNumber").textContent = `Câu ${questionIndex + 1}`;
  $("topicName").textContent = q.topic || "Khám phá";
  $("questionArt").textContent = q.art || "🌟";
  $("questionText").textContent = q.q || "Bé quan sát hình nhé!";
  $("questionHint").textContent = q.hint || "Chọn đáp án đúng nhé!";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("checkBtn").classList.remove("hidden");
  $("checkBtn").disabled = true;
  $("nextBtn").classList.add("hidden");
  const answers = $("answers");
  answers.replaceChildren();
  answers.style.display = "grid";
  (q.a || []).forEach((answer, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "answer";
    b.textContent = answer;
    b.addEventListener("click", () => {
      if (checked) return;
      selected = i;
      answers.querySelectorAll(".answer").forEach(x => x.classList.remove("chosen"));
      b.classList.add("chosen");
      $("checkBtn").disabled = false;
    });
    answers.appendChild(b);
  });
  // In case of malformed question data, show a visible fallback rather than a blank card.
  if (!q.a || !q.a.length) {
    const msg = document.createElement("p");
    msg.className = "hint";
    msg.textContent = "Bài này đang ở chế độ khám phá hình. Chọn “Học bằng hình” hoặc chuyển sang câu tiếp theo nhé.";
    answers.appendChild(msg);
  }
  renderLesson(q);
}

$("checkBtn").onclick = () => {
  if (selected === null || checked) return;
  checked = true;
  const q = roundQuestions[questionIndex % roundQuestions.length];
  const buttons = [...$("answers").querySelectorAll(".answer")];
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) b.classList.add("correct");
    if (i === selected && i !== q.correct) b.classList.add("wrong");
  });
  state.done++;
  if (selected === q.correct) {
    state.correct++;
    state.stars++;
    $("feedback").textContent = "Đúng rồi! Bé giỏi quá! ⭐";
    $("feedback").className = "feedback good";
    if (state.sound) beep(660);
  } else {
    $("feedback").textContent = "Mình thử lại nhé! Đáp án đúng được tô màu xanh 💛";
    $("feedback").className = "feedback bad";
    if (state.sound) beep(260);
  }
  save();
  $("checkBtn").classList.add("hidden");
  $("nextBtn").classList.remove("hidden");
};

$("nextBtn").onclick = () => {
  questionIndex++;
  if (questionIndex % roundQuestions.length === 0) prepareQuestions();
  renderQuestion();
};

function setMode(mode) {
  learningMode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("selected", b.dataset.mode === mode));
  $("lessonPanel").classList.toggle("hidden", mode !== "learn");
  $("quizPanel").classList.toggle("hidden", mode === "learn");
  if (mode === "game") toast("Trò chơi nhanh: chọn đáp án đúng để nhận sao! 🌟");
  renderQuestion();
}
document.querySelectorAll(".mode-btn").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
["ageSelect", "difficultySelect"].forEach(id => {
  $(id).addEventListener("change", () => {
    questionIndex = 0;
    prepareQuestions();
    renderQuestion();
    toast("Đã đổi lộ trình học cho bé!");
  });
});

// Native TTS for Capacitor Android/iOS with language fallbacks and browser fallback.
let nativeTtsAvailable = false;
let speechBusy = false;
let nativeTtsLastError = "";

async function stopLessonSpeech() {
  try {
    if (nativeTtsAvailable) await TextToSpeech.stop();
  } catch (_) {}
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } catch (_) {}
  speechBusy = false;
  $("speakBtn").dataset.reading = "false";
  $("speakBtn").textContent = "🔊 Nghe bài học";
  $("speakBtn").disabled = false;
}

async function speakWithNativeTts(text, btn) {
  const base = { text, rate: 0.78, pitch: 1.0, volume: 1.0, category: "ambient" };
  const attempts = [
    { ...base, lang: "vi-VN" },
    { ...base, lang: "vi" },
    { ...base } // use the Android TTS engine's default language if Vietnamese locale alias is rejected
  ];
  let lastError;
  for (const options of attempts) {
    try {
      await TextToSpeech.speak(options);
      return true;
    } catch (error) {
      lastError = error;
      nativeTtsLastError = String(error && (error.message || error) || "Unknown native TTS error");
      console.warn("Native TTS attempt failed:", options.lang || "device default", error);
      try { await TextToSpeech.stop(); } catch (_) {}
    }
  }
  nativeTtsLastError = String(lastError && (lastError.message || lastError) || nativeTtsLastError);
  return false;
}

async function speakLesson() {
  const text = `${$("lessonTitle").textContent}. ${$("lessonText").textContent}`;
  const btn = $("speakBtn");

  if (speechBusy || btn.dataset.reading === "true") {
    await stopLessonSpeech();
    return;
  }

  btn.disabled = true;
  btn.textContent = "⏳ Đang chuẩn bị giọng đọc…";
  nativeTtsLastError = "";

  // Native plugin first on installed Capacitor app.
  if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
    nativeTtsAvailable = true;
    try {
      // Set the button to Stop before awaiting speak, so users can interrupt long lessons.
      speechBusy = true;
      btn.dataset.reading = "true";
      btn.disabled = false;
      btn.textContent = "⏹️ Dừng đọc";
      const ok = await speakWithNativeTts(text, btn);
      if (ok) {
        await stopLessonSpeech();
        return;
      }
      // Do not return here: try Web Speech fallback below in case native plugin/locale fails.
      speechBusy = false;
      btn.dataset.reading = "false";
      btn.disabled = true;
      btn.textContent = "⏳ Thử bộ đọc dự phòng…";
    } catch (error) {
      nativeTtsLastError = String(error && (error.message || error) || "Unknown native TTS error");
      console.error("Native TTS error:", error);
      speechBusy = false;
      btn.dataset.reading = "false";
    }
  }

  // Browser/WebView fallback.
  const synth = window.speechSynthesis;
  if (synth && typeof window.SpeechSynthesisUtterance !== "undefined") {
    try {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "vi-VN";
      utterance.rate = 0.82;
      utterance.pitch = 1.0;
      speechBusy = true;
      btn.dataset.reading = "true";
      btn.disabled = false;
      btn.textContent = "⏹️ Dừng đọc";
      utterance.onend = () => { stopLessonSpeech(); };
      utterance.onerror = (event) => {
        stopLessonSpeech();
        console.error("Browser TTS error:", event && event.error, event);
        toast("Bộ đọc dự phòng cũng không phát được. Hãy bật dịch vụ Chuyển văn bản thành lời nói và tải giọng Tiếng Việt.");
      };
      synth.speak(utterance);
      // Some Android WebViews silently fail to enqueue speech; leave the button usable.
      return;
    } catch (error) {
      console.error("Browser TTS error:", error);
    }
  }

  btn.textContent = "🔊 Nghe bài học";
  btn.disabled = false;
  btn.dataset.reading = "false";
  const detail = nativeTtsLastError ? ` Chi tiết: ${nativeTtsLastError}` : "";
  toast("Chưa phát được giọng đọc. Vào Cài đặt Android → Chuyển văn bản thành lời nói, chọn dịch vụ Google và tải giọng Tiếng Việt." + detail);
}

$("speakBtn").onclick = () => { speakLesson(); };
$("lessonNextBtn").onclick = () => {
  questionIndex++;
  if (questionIndex % roundQuestions.length === 0) prepareQuestions();
  renderQuestion();
  toast("Khám phá tiếp nào! 🌟");
};

const startSubjectOriginal = startSubject;
startSubject = function(key) {
  startSubjectOriginal(key);
  renderQuestion();
  setMode(learningMode);
};
// Bridge the early, defensive HTML navigation layer to the app logic.
document.addEventListener("be-hoc-vui:subject", (event) => {
  const key = event.detail && event.detail.subject;
  if (key && (subjects[key] || key === "mixed")) startSubject(key);
});
// Delegated navigation is resilient to buttons being re-rendered later.
document.addEventListener("click", (event) => {
  const nav = event.target.closest && event.target.closest(".nav-item");
  if (nav) showScreen(nav.dataset.screen);
}, true);
setMode("learn");
