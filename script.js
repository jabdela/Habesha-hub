// ==========================================
// 1. DICTIONARIES & DATASETS (Full 20 Items Each)
// ==========================================
const translationDictionary = {
    en: {
        navCreators: "Models",
        navGroups: "Groups",
        navVideos: "Videos",
        navLive: "Lives",
        langLabel: "Language",
        themeDark: "<i class='fa-solid fa-moon'></i> Dark Mode",
        themeLight: "<i class='fa-solid fa-sun'></i> Light Mode",
        vipLabel: "<i class='fa-solid fa-star'></i> VIP Registration",
        aboutLabel: "<i class='fa-solid fa-circle-info'></i> About Us",
        logoutLabel: "<i class='fa-solid fa-right-from-bracket'></i> Log Out",
        bottomTextLoggedOut: "You need to log in or create an account to unlock more content.",
        bottomBtnLoggedOut: "Log In / Sign Up",
        bottomTextLoggedIn: "You must upgrade to a VIP plan to view more content.",
        bottomBtnLoggedIn: "Join VIP Plan",
        authTitle: "Account Access",
        loginTab: "Login",
        signupTab: "Sign Up",
        loginIdLabel: "Email or Phone Number",
        loginPwdLabel: "Password",
        loginSubmit: "Log In",
        signupNameLabel: "Full Name",
        signupIdLabel: "Email or Phone Number",
        signupPwdLabel: "Password (At least 6 chars, letters & numbers)",
        signupConfirmLabel: "Confirm Password",
        signupSubmit: "Send Verification Code",
        verifyOtpLabel: "Enter 6-Digit Verification Code",
        verifySubmit: "Verify & Complete Account",
        paymentTitle: "VIP Access Required",
        paymentInst: "Pay 1000 ETB using Telebirr or CBE. Copy the account/phone number below, complete the transfer, and upload your payment screenshot to gain instant access.",
        teleLabel: "Telebirr Account",
        cbeLabel: "CBE Bank Account",
        copyBtn: "<i class='fa-solid fa-copy'></i> Copy",
        uploadLabel: "<i class='fa-solid fa-image'></i> Upload Payment Screenshot",
        verifyPayBtn: "<i class='fa-solid fa-shield-halved'></i> Check My Screenshot",
        aboutTitle: "About Us",
        aboutText: "Welcome to ሀበሻ Hub VIP. Your premier hub for exclusive entertainment, models,sex group discussions, and sex live streaming. Upgrade to VIP for unlimited access."
    },
    am: {
        navCreators: "ሞዴሎች",
        navGroups: "ቡድኖች",
        navVideos: "ቪዲዮዎች",
        navLive: "ቀጥታ",
        langLabel: "ቋንቋ",
        themeDark: "<i class='fa-solid fa-moon'></i> ጥቁር ገጽታ",
        themeLight: "<i class='fa-solid fa-sun'></i> ብሩህ ገጽታ",
        vipLabel: "<i class='fa-solid fa-star'></i> VIP ምዝገባ",
        aboutLabel: "<i class='fa-solid fa-circle-info'></i> ስለ እኛ",
        logoutLabel: "<i class='fa-solid fa-right-from-bracket'></i> ውጣ",
        bottomTextLoggedOut: "ተጨማሪ ይዘቶችን ለማየት እባክዎ መለያ ይግቡ ወይም ይመዝገቡ::",
        bottomBtnLoggedOut: "ይግቡ / ይመዝገቡ",
        bottomTextLoggedIn: "ተጨማሪ ይዘት ለማየት VIP አባል መሆን አለብዎት::",
        bottomBtnLoggedIn: "VIP አባል ይሁኑ",
        authTitle: "የመለያ መግቢያ",
        loginTab: "ይግቡ",
        signupTab: "ይምዝገቡ",
        loginIdLabel: "ኢሜይል ወይም ስልክ ቁጥር",
        loginPwdLabel: "የይለፍ ቃል",
        loginSubmit: "ይግቡ",
        signupNameLabel: "ሙሉ ስም",
        signupIdLabel: "ኢሜይል ወይም ስልክ ቁጥር",
        signupPwdLabel: "የይለፍ ቃል (ቢያንስ 6 ቁምፊ፣ ፊደላትና ቁጥሮች)",
        signupConfirmLabel: "የይለፍ ቃል ያረጋግጡ",
        signupSubmit: "የማረጋገጫ ኮድ ላክ",
        verifyOtpLabel: "የ 6-አሃዝ የማረጋገጫ ኮድ ያስገቡ",
        verifySubmit: "አረጋግጥና ጨርስ",
        paymentTitle: "የ VIP መዳረሻ ያስፈልጋል",
        paymentInst: "ለመግባት 1000 ብር በቴሌብር (Telebirr) ወይም በንግድ ባንክ (CBE) ይክፈሉ። ከታች ያለውን ስልክ/አካውንት ኮፒ በማድረግ ይክፈሉ፣ ከዚያ የከፈሉበትን ስክሪንሾት (Screenshot) እዚህ በመጫን ያረጋግጡ።",
        teleLabel: "የቴሌብር አካውንት",
        cbeLabel: "የንግድ ባንክ አካውንት",
        copyBtn: "<i class='fa-solid fa-copy'></i> ኮፒ",
        uploadLabel: "<i class='fa-solid fa-image'></i> የክፍያ ስክሪንሾት ይጫኑ",
        verifyPayBtn: "<i class='fa-solid fa-shield-halved'></i> ስክሪንሾት አረጋግጥ",
        aboutTitle: "ስለ እኛ",
        aboutText: "ወደ ሀበሻ Hub VIP Portal እንኳን በደህና መጡ። ለየት ያሉ መዝናኛዎች፣ የሞዴሎች ገጽ፣ የቡድን ውይይቶች እና የቀጥታ ቪዲዮ ስትሪሚንግ የሚያገኙበት ቀዳሚ መድረክ።"
    }
};

const DEFAULT_AVATAR = "https://i.postimg.cc/mD3m5x3Y/default-avatar.png";

const data = {
    creators: [
        { title: "Selam", sub: "196 Followers", img: "https://i.postimg.cc/CLQ0bdd6/images-(48).jpg", isOnline: true },
        { title: "Hellen", sub: "750 Followers", img: "https://i.postimg.cc/Y98kB02V/c0925a4a731a3be6d8a120c0e265bb3f.jpg", isOnline: false },
        { title: "Rahel", sub: "633 Followers", img: "https://i.postimg.cc/BnvSSxP6/1788172128809.jpg", isOnline: true },
        { title: "Bethlehem", sub: "1.2k Followers", img: "https://i.postimg.cc/wBy9JgV3/1788171869754.jpg", isOnline: true },
        { title: "Eden", sub: "707 Followers", img: "https://i.postimg.cc/vTzyMBQP/1788171877524.jpg", isOnline: false },
        { title: "Meron", sub: "95 Followers", img: "https://i.postimg.cc/gJ4dbjcS/iloveblackgirls-model-5.jpg", isOnline: true },
        { title: "Tigist", sub: "1.1k Followers", img: "https://i.postimg.cc/xdJ9HnRk/1788171906232.jpg", isOnline: false },
        { title: "Frehiwot", sub: "5k Followers", img: "https://i.postimg.cc/rFPT5zzf/5af67e1b25e7acdb567cf39ee8873025.jpg", isOnline: true },
        { title: "Martha", sub: "580 Followers", img: "https://i.postimg.cc/1XHSPt9K/1788171917150.jpg", isOnline: true },
        { title: "Yordanos", sub: "5.1k Followers", img: "https://i.postimg.cc/qqLr0Rk8/1788171934642.jpg", isOnline: false },
        { title: "Feven", sub: "934 Followers", img: "https://i.postimg.cc/WznVj32h/1788171957379.jpg", isOnline: true },
        { title: "Ruth", sub: "1k Followers", img: "https://i.postimg.cc/D0FhtsKh/1788172115673.jpg", isOnline: false },
        { title: "Genet", sub: "150 Followers", img: "https://i.postimg.cc/7hD4p7yx/1788172058768.jpg", isOnline: true },
        { title: "Kidist", sub: "908 Followers", img: "https://i.postimg.cc/prZvxT2q/1788172001049.jpg", isOnline: true },
        { title: "Hiwot", sub: "790 Followers", img: "https://i.postimg.cc/LXjRCDwt/1788172194616.jpg", isOnline: false },
        { title: "Hanah", sub: "2.9k Followers", img: "https://i.postimg.cc/1tDPCB20/1788172319280.jpg", isOnline: true },
        { title: "Sara", sub: "300 Followers", img: "https://i.postimg.cc/pTKxGC46/1788172228887.jpg", isOnline: false },
        { title: "Nardos", sub: "846 Followers", img: "https://i.postimg.cc/Dz9nPHjw/1788172420877.jpg", isOnline: true },
        { title: "Mekdes", sub: "2.2k Followers", img: "https://i.postimg.cc/d1nvc3QS/iloveblackgirls-model-1.jpg", isOnline: true },
        { title: "Tsion", sub: "4.3k Followers", img: "https://i.postimg.cc/pdwRJ4Gn/1788172355452.jpg", isOnline: false },
        { title: "makiba", sub: "476 Followers", img: "https://i.postimg.cc/G2Zj4Ty7/3149e54b44162e392d5cb2bec8f24c23.jpg", isOnline: true },
        { title: "bamlak", sub: "4.3k Followers", img: "https://i.postimg.cc/QtBbNJH7/5886487829083700755-121.jpg", isOnline: false },
        { title: "saron", sub: "1k Followers", img: "https://i.postimg.cc/4dK54Qmz/5886487829083700756-121.jpg", isOnline: true },
        { title: "eden", sub: "3k Followers", img: "https://i.postimg.cc/cJkhNb4x/8adcb91b6a3045e2fe9f4e266730564e.jpg", isOnline: true },
        { title: "redeet", sub: "700 Followers", img: "https://i.postimg.cc/76CVPn5v/images-(33).jpg", isOnline: false },
        { title: "behiwet", sub: "95 Followers", img: "https://i.postimg.cc/NMy4Gk5V/images-(34).jpg", isOnline: true },
        { title: "thion", sub: "1.1k Followers", img: "https://i.postimg.cc/26qwj7Vt/images-(35).jpg", isOnline: false },
        { title: "almaz", sub: "7.5k Followers", img: "https://i.postimg.cc/V6SRsWdZ/images-(36).jpg", isOnline: true },
        { title: "tizta", sub: "580 Followers", img: "https://i.postimg.cc/QtBbNJH4/images-(37).jpg", isOnline: true },
        { title: "adey", sub: "5.1k Followers", img: "https://i.postimg.cc/ZR9cYxCf/images-(38).jpg", isOnline: false },
        { title: "feven", sub: "934 Followers", img: "https://i.postimg.cc/3RyBrFdn/images-(39).jpg", isOnline: true },
        { title: "mahlet", sub: "1k Followers", img: "https://i.postimg.cc/Twy92Jpc/images-(40).jpg", isOnline: false },
        { title: "mihret", sub: "150 Followers", img: "https://i.postimg.cc/63706fyf/images-(41).jpg", isOnline: true },
        { title: "aynalem", sub: "908 Followers", img: "https://i.postimg.cc/26qwj7Vn/images-(42).jpg", isOnline: true },
        { title: "bitanya", sub: "790 Followers", img: "https://i.postimg.cc/432PTSNx/images-(43).jpg", isOnline: false },
        { title: "Hawwi", sub: "2.9k Followers", img: "https://i.postimg.cc/QMYmryxx/images-(44).jpg", isOnline: true },
        { title: "rahel", sub: "300 Followers", img: "https://i.postimg.cc/LsQDMb6R/images-(45).jpg", isOnline: false },
        { title: "blen", sub: "846 Followers", img: "https://i.postimg.cc/JhzxvLmr/images-(46).jpg", isOnline: true }
   
    ],
    channels: [
        { title: "ሀበሻ ወሲብ ", sub: "3.7k Members", img: "https://i.postimg.cc/9QZNRfRq/images-(32).jpg" },
        { title: "መበዳጃ ", sub: "1.4k Members", img: "https://i.postimg.cc/wjLbyByL/IMG-20260831-143309-695.jpg" },
        { title: "ወሲብ ብቻ", sub: "1.1k Members", img: "https://i.postimg.cc/hPH5tmjm/20d635a5782a514b7390c0f82424bf89.jpg" },
        { title: "bang bros ሀበሻ", sub: "4.3k Members", img: "https://i.postimg.cc/BQdVnF6Q/channels4-profile.jpg" },
        { title: "xnxx ሀበሻ ", sub: "2.1k Members", img: "https://i.postimg.cc/y8crgNgx/9daa102d9a1f1d3ea38336a388375d0c-fgraphic.png" },
        { title: "anal ፈላጊ😉", sub: "6.8k Members", img: "https://i.postimg.cc/HkXPcLc9/90841542-009-9700.jpg" },
        { title: "ሴክስ ቻት", sub: "600 Members", img: "https://i.postimg.cc/gkfT2hJ0/attachment-107066830.png" },
        { title: "let's talk about sex", sub: "900 Members", img: "https://i.postimg.cc/y8crgNgd/hot-sexy-woman-female-lady-legs-with-high-heels-for-bar-strip-club-logo-design-vector.jpg" },
        { title: "ራቁት live", sub: "1.2k Members", img: "https://i.postimg.cc/sg70Q2Qg/sexy-high-heels-with-g-string-for-bar-strip-club-logo-design-vector.jpg" },
        { title: "እንባዳ", sub: "5.5k Members", img: "https://i.postimg.cc/rwxY0p0W/black-anal-beauties-skin-diamond-close-up.jpg" },
        { title: "እምስ እና ሙዚቃ", sub: "18.6k Members", img: "https://i.postimg.cc/hPH5tmjt/2251727-4742.png" },
        { title: "ፍቅር ብቻ", sub: "1.1k Members", img: "https://i.postimg.cc/JzZdDhD4/the-Rolling-Stones-Tongue-and-Lips-logo.jpg" },
        { title: "sex talk", sub: "150 Members", img: "https://i.postimg.cc/yYwb8Rdx/logo-square.jpg" },
        { title: "sex dating", sub: "1.7k Members", img: "https://i.postimg.cc/GhZ5mD22/images-(35).jpg" },
        { title: "habesha porn", sub: "4.9k Members", img: "https://i.postimg.cc/MpVrMGMv/images-(34).jpg" },
        { title: "ሴክስ እና ፍቅር", sub: "6.2k Members", img: "https://i.postimg.cc/gkfT2hJz/images-(36).jpg" },
        { title: "መበዳጃ ", sub: "9.1k Members", img: "https://i.postimg.cc/qM95vKR4/images-(2).png" },
        { title: "porn hub", sub: "25.4k Members", img: "https://i.postimg.cc/13wYnzn8/images-(1).png" },
        { title: "pussy ፈላጊ ብቻ", sub: "95 Members", img: "https://i.postimg.cc/4NrSxcdX/images-(3).png" },
        { title: "ጀላ ጠቢወች", sub: "90 Members", img: "https://i.postimg.cc/jdGFSf57/a628b8f187893999fd7903c7a729945a.jpg" }
    ],
    videos: [
        { title: "VIP", sub: "14K Views • 12 mins", img: "https://i.postimg.cc/QCb9F1gC/1.webp" },
        { title: "VIP", sub: "23K Views • 18 mins", img: "https://i.postimg.cc/FzZdY3bv/1-460.jpg" },
        { title: "VIP", sub: "8K Views • 9 mins", img: "https://i.postimg.cc/8CkXn8P1/xv-30-t.jpg" },
        { title: "VIP", sub: "3K Views • 24 mins", img: "https://i.postimg.cc/T1Qp0Wtt/xn-24-t.jpg" },
        { title: "VIP", sub: "9K Views • 7 mins", img: "https://i.postimg.cc/kGc62KNg/6293659-90499e3-320x.jpg" },
        { title: "VIP", sub: "5K Views • 45 mins", img: "https://i.postimg.cc/NF49Km8m/alia-starr-8.jpg" },
        { title: "VIP", sub: "7K Views • 15 mins", img: "https://i.postimg.cc/L5Rg4NPs/images-(38).jpg" },
        { title: "VIP", sub: "19K Views • 32 mins", img: "https://i.postimg.cc/SRqYQD9Q/images-(39).jpg" },
        { title: "VIP", sub: "20K Views • 14 mins", img: "https://i.postimg.cc/Y0kL2bFt/images-(40).jpg" },
        { title: "VIP", sub: "4K Views • 5 mins", img: "https://i.postimg.cc/WzjqpXZj/images-(41).jpg" },
        { title: "VIP", sub: "6K Views • 21 mins", img: "https://i.postimg.cc/NFY2GpXc/images-(42).jpg" },
        { title: "VIP", sub: "15K Views • 11 mins", img: "https://i.postimg.cc/mkR1Z894/images-(43).jpg" },
        { title: "VIP", sub: "3K Views • 16 mins", img: "https://i.postimg.cc/GtQ84GPy/IMG-20260831-151829-206.jpg" },
        { title: "VIP", sub: "12K Views • 50 mins", img: "https://i.postimg.cc/8cHJ7Mdr/IMG-20260831-151841-788.jpg" },
        { title: "VIP", sub: "3K Views • 19 mins", img: "https://i.postimg.cc/WznFdgms/Lily-Starfire-Big-Boobie-Babe-In-Hot-Red-Bikini-All-Black-X8.jpg" },
        { title: "VIP", sub: "4K Views • 10 mins", img: "https://i.postimg.cc/7hVG501b/preview-mp4.jpg" },
        { title: "VIP", sub: "8K Views • 4 mins", img: "https://i.postimg.cc/6q028nV4/xn-30-p.jpg" },
        { title: "VIP", sub: "2K Views • 28 mins", img: "https://i.postimg.cc/BbgLjH5f/xn-30-t.jpg" },
        { title: "VIP", sub: "13K Views • 13 mins", img: "https://i.postimg.cc/6q028nV2/xv-30-p.jpg" },
        { title: "VIP", sub: "18K Views • 22 mins", img: "https://i.postimg.cc/cJD9pD6V/images-(32).jpg" }
    ],
    streams: [
        { title: "live", sub: "94 Watching", isLive: true, img: "https://i.postimg.cc/g2JX0gMz/2560x1440-201.webp" },
        { title: "live", sub: "85 Watching", isLive: true, img: "https://i.postimg.cc/9F1wV6BX/1661009256-8-titis-org-p-ethiopia-nude-girls-chastnaya-erotika-10.jpg" },
        { title: "live", sub: "7 Watching", isLive: true, img: "https://i.postimg.cc/bNLS87Rr/2560x1440-206.webp" },
        { title: "live", sub: "44 Watching", isLive: true, img: "https://i.postimg.cc/ZKjvZGLW/2560x1440-208.webp" },
        { title: "live", sub: "10 Watching", isLive: true, img: "https://i.postimg.cc/7YXJDFNH/2560x1440-222.webp" },
        { title: "live", sub: "3 Watching", isLive: true, img: "https://i.postimg.cc/gk4LdCKw/habesha-barbie-0029.jpg" },
        { title: "live", sub: "42 Watching", isLive: true, img: "https://i.postimg.cc/2S6b50Hz/images-(45).jpg" },
        { title: "live ", sub: "11 Watching", isLive: true, img: "https://i.postimg.cc/BQNPsrCP/images-(46).jpg" },
        { title: "live", sub: "74 Watching", isLive: true, img: "https://i.postimg.cc/SNVYqBGm/images-(47).jpg" },
        { title: "live", sub: "18 Watching", isLive: true, img: "https://i.postimg.cc/Nfb2Y3xg/images-(48).jpg" },
        { title: "live", sub: "102 Watching", isLive: true, img: "https://i.postimg.cc/zfqJp6S7/14717665-128-fd42.jpg" },
        { title: "live", sub: "61 Watching", isLive: true, img: "https://i.postimg.cc/W3HTN3R5/2560x1440-216.webp" },
        { title: "live", sub: "310 Watching", isLive: true, img: "https://i.postimg.cc/yN7VntXR/2560x1440-219.webp" },
        { title: "live", sub: "54 Watching", isLive: true, img: "https://i.postimg.cc/V6Vmf6yW/2560x1440-237.webp" },
        { title: "live", sub: "12 Watching", isLive: true, img: "https://i.postimg.cc/6QzBPcYf/images-(47).jpg" },
        { title: "live", sub: "29 Watching", isLive: true, img: "https://i.postimg.cc/q7pkQSXk/orig-9.webp" },
        { title: "live", sub: "88 Watching", isLive: true, img: "https://i.postimg.cc/W4Ssy8Xr/preview-mp4.webp" },
        { title: "live", sub: "15 Watching", isLive: true, img: "https://i.postimg.cc/vBNbYBRh/xv-21-t.jpg" },
        { title: "live", sub: "201 Watching", isLive: true, img: "https://i.postimg.cc/R0vMGyQS/xv-8-t.jpg" },
        { title: "live", sub: "45 Watching", isLive: true, img: "https://i.postimg.cc/PxxdnD7f/1703117275-titis-org-p-big-black-cunt-erotika-pinterest-58.jpg" }
    ]
};

// Restricted Strictly to 2 Models Only (Isolated state and message arrays)
const mockChats = [
    {
        id: "miya2",
        name: "miya",
        subTextUnread: "new message",
        subTextRead: "ሰላም እንዴት ነክ እኔን መብዳት ትፈልጋለክ? 🥹",
        time: "today",
        img: "https://i.postimg.cc/xCgYV8j4/blackteensubmit-model-1.jpg",
        hasUnread: true,
        messages: [
            { type: "received", text: "ሰላም እንዴት ነክ እኔን መብዳት ትፈልጋለክ? 🥹", time: "today" }
        ]
    },
    {
        id: "samri_4",
        name: "samrawit",
        subTextUnread: "new message",
        subTextRead: "Hey bb sex ማድረግ ከፈለክ አናግረኝ ",
        time: "today",
        img: "https://i.postimg.cc/9M1VH0Xk/xn-9-t.jpg",
        hasUnread: true,
        messages: [
            { type: "received", text: "Hey bb sex ማድረግ ከፈለክ አናግረኝ ", time: "10:45 AM" }
        ]
    }
];

// ==========================================
// 2. STATE MANAGEMENT & LIFECYCLE
// ==========================================
let currentUser = null;
let currentLang = 'en';
let generatedCode = null;
let pendingUser = null;
let isTriggerActive = false;
let hasTriggeredThisCycle = false;
let selectedChatId = null;

window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';
    }
    recalculateUnreadCount();
    changeLanguage('en');
    renderGrid('videos');
});

function recalculateUnreadCount() {
    if (!currentUser) {
        updateChatBadge(0); // Clear badge if user is logged out
        return;
    }
    const unreadCount = mockChats.filter(c => c.hasUnread).length;
    updateChatBadge(unreadCount);
}


// ==========================================
// 3. NAVIGATION & ACCESS CONTROL
// ==========================================
function navigateTo(pageId, btn) {
    if ((pageId === 'chat' || pageId === 'profile') && !currentUser) {
        openAuthModal();
        return;
    }

    document.querySelectorAll('.app-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));

    if (btn) btn.classList.add('active');

    if (pageId === 'home') document.getElementById('pageHome').classList.add('active');
    if (pageId === 'chat') {
        document.getElementById('pageChat').classList.add('active');
        initCustomChatList();
    }
    if (pageId === 'profile') {
        document.getElementById('pageProfile').classList.add('active');
        updateProfileUI();
    }
}

function updateChatBadge(count) {
    let badge = document.getElementById('chatBadge');
    const chatBtn = document.querySelector('.app-nav-btn[onclick*="chat"]');
    
    if (!badge && chatBtn) {
        badge = document.createElement('span');
        badge.id = 'chatBadge';
        badge.style.cssText = "position:absolute; top:2px; right:12px; background:#e50914; color:#fff; font-size:10px; font-weight:bold; border-radius:10px; padding:2px 6px; display:none;";
        chatBtn.style.position = 'relative';
        chatBtn.appendChild(badge);
    }

    if (badge) {
        if (count > 0) {
            badge.innerText = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// ==========================================
// 4. PASSWORD HIDE & SHOW TOGGLE
// ==========================================
function togglePasswordVisibility(inputId, iconEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        iconEl.classList.remove('fa-eye');
        iconEl.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        iconEl.classList.remove('fa-eye-slash');
        iconEl.classList.add('fa-eye');
    }
}

// ==========================================
// 5. CHAT SYSTEM (FIXED KEYBOARD, ISOLATED DATA, UNREAD STATE)
// ==========================================
function initCustomChatList() {
    const chatContainer = document.getElementById('pageChat');
    if (!chatContainer) return;

    chatContainer.innerHTML = `
        <div id="chatWrapper" style="background:#000; color:#fff; height:100dvh; min-height:100vh; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width:480px; margin:0 auto; display:flex; flex-direction:column; position:relative; overflow:hidden;">
            
            <div style="display:flex; justify-content:space-between; align-items:center; padding:16px; border-bottom:1px solid #1a1a1a; flex-shrink:0;">
                <span style="font-size:1.2rem; font-weight:800; color:#fff;">Messages</span>
                <i class="fa-regular fa-pen-to-square" style="font-size:1.2rem; color:#fff; cursor:pointer;"></i>
            </div>

            <div id="chatRowsContainer" style="flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch;"></div>

            <div id="singleRoomView" style="display:none; flex-direction:column; height:100dvh; background:#000; position:fixed; top:0; left:0; right:0; bottom:0; z-index:9999; max-width:480px; margin:0 auto; overflow:hidden;">
                <div id="singleRoomHeader" style="display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid #1a1a1a; flex-shrink:0;"></div>
                <div id="singleRoomMessages" style="flex:1; padding:16px; overflow-y:auto; display:flex; flex-direction:column; gap:10px; -webkit-overflow-scrolling:touch;"></div>
                <form id="chatForm" onsubmit="sendCustomMessage(event)" style="padding:12px 16px; display:flex; align-items:center; gap:10px; border-top:1px solid #1a1a1a; flex-shrink:0; background:#000; margin:0;">
                    <input type="text" id="customChatInput" placeholder="Message..." autocomplete="off" style="flex:1; background:#121212; border:1px solid #262626; color:#fff; padding:10px 16px; border-radius:22px; font-size:0.9rem; outline:none;">
                    <button type="submit" style="background:none; border:none; color:#0095f6; font-weight:bold; font-size:0.95rem; cursor:pointer; padding:4px 8px;">Send</button>
                </form>
            </div>
        </div>
    `;

    renderChatRows();
}

function renderChatRows() {
    const listEl = document.getElementById('chatRowsContainer');
    if (!listEl) return;
    listEl.innerHTML = '';

    mockChats.forEach(chat => {
        const row = document.createElement('div');
        row.style.cssText = "display:flex; align-items:center; justify-content:space-between; padding:14px 16px; cursor:pointer; transition:background 0.15s; border-bottom:1px solid #121212;";
        row.onmouseover = () => row.style.background = "#121212";
        row.onmouseout = () => row.style.background = "transparent";
        row.onclick = () => openChatRoom(chat.id);

        const displayText = chat.hasUnread ? "new message" : chat.subTextRead;
        const fontStyle = chat.hasUnread ? "font-weight:700; color:#0095f6;" : "font-weight:normal; color:#8e8e93;";

        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:14px; flex:1; min-width:0;">
                <img src="${chat.img}" alt="${chat.name}" style="width:52px; height:52px; border-radius:50%; object-fit:cover; display:block; flex-shrink:0;">
                <div style="display:flex; flex-direction:column; flex:1; min-width:0;">
                    <span style="font-weight:700; font-size:0.95rem; color:#fff;">${chat.name}</span>
                    <span style="font-size:0.85rem; ${fontStyle} white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-top:3px;">
                        ${displayText}
                    </span>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-left:12px;">
                ${chat.hasUnread ? `<span style="width:9px; height:9px; background:#0095f6; border-radius:50%; display:inline-block;"></span>` : `<span style="font-size:0.75rem; color:#666;">${chat.time}</span>`}
            </div>
        `;
        listEl.appendChild(row);
    });
}

function openChatRoom(chatId) {
    selectedChatId = chatId;
    const chat = mockChats.find(c => c.id === chatId);
    if (!chat) return;

    if (chat.hasUnread) {
        chat.hasUnread = false;
        recalculateUnreadCount();
    }

    const singleView = document.getElementById('singleRoomView');
    const header = document.getElementById('singleRoomHeader');
    
    singleView.style.display = 'flex';
    header.innerHTML = `
        <i class="fa-solid fa-arrow-left" onclick="closeChatRoom()" style="font-size:1.2rem; cursor:pointer; color:#fff;"></i>
        <img src="${chat.img}" style="width:38px; height:38px; border-radius:50%; object-fit:cover;">
        <div style="display:flex; flex-direction:column; flex:1;">
            <span style="font-weight:700; font-size:0.95rem; color:#fff;">${chat.name}</span>
            <span style="font-size:0.75rem; color:#34c759;">Online</span>
        </div>
    `;

    renderRoomMessages(chat);
}

function closeChatRoom() {
    document.getElementById('singleRoomView').style.display = 'none';
    selectedChatId = null;
    renderChatRows();
}

function renderRoomMessages(chat) {
    const container = document.getElementById('singleRoomMessages');
    if (!container) return;
    container.innerHTML = '';

    chat.messages.forEach(m => {
        const isSent = m.type === 'sent';
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `display:flex; flex-direction:column; align-items:${isSent ? 'flex-end' : 'flex-start'}; width:100%;`;

        const bubble = document.createElement('div');
        bubble.style.cssText = isSent ?
            "background:#3797f0; color:#fff; padding:10px 14px; border-radius:18px 18px 4px 18px; max-width:75%; font-size:0.9rem; word-break:break-word;" :
            "background:#262626; color:#fff; padding:10px 14px; border-radius:18px 18px 18px 4px; max-width:75%; font-size:0.9rem; word-break:break-word;";

        bubble.innerText = m.text;
        wrapper.appendChild(bubble);

        if (m.vipWarning) {
            const warning = document.createElement('div');
            warning.style.cssText = "margin-top:6px; background:rgba(229, 9, 20, 0.15); border:1px solid #e50914; color:#ff6b6b; padding:8px 12px; border-radius:10px; font-size:0.8rem; display:flex; align-items:center; gap:8px; max-width:85%;";
            warning.innerHTML = `
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>VIP membership required to chat.</span>
                <button onclick="openPaymentModal()" style="background:#e50914; color:#fff; border:none; padding:4px 8px; border-radius:6px; font-size:0.75rem; font-weight:bold; cursor:pointer; margin-left:auto;">Upgrade</button>
            `;
            wrapper.appendChild(warning);
        }

        container.appendChild(wrapper);
    });

    container.scrollTop = container.scrollHeight;
}

function sendCustomMessage(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('customChatInput');
    const text = input ? input.value.trim() : '';
    if (!text || !selectedChatId) return;

    const chat = mockChats.find(c => c.id === selectedChatId);
    if (!chat) return;

    chat.messages.push({
        type: 'sent',
        text: text,
        vipWarning: true
    });

    input.value = '';
    renderRoomMessages(chat);
}

// ==========================================
// 6. PROFILE & VIP AVATAR RESTRICTIONS
// ==========================================
function updateProfileUI() {
    const userImg = (currentUser && currentUser.pfp && currentUser.isVip) ? currentUser.pfp : DEFAULT_AVATAR;
    const name = currentUser ? currentUser.name : "Guest User";
    const username = currentUser ? `@${currentUser.identifier.split('@')[0]}` : "@guest";

    const profilePfpEl = document.getElementById('profileAvatarImg');
    if (profilePfpEl) profilePfpEl.src = userImg;

    document.getElementById('profileName').innerText = name;
    document.getElementById('profileUsername').innerText = username;
    document.getElementById('headerAuthBtnText').innerText = currentUser ? name.split(' ')[0] : "Login / Sign Up";
}

function handleProfilePfpUpload(input) {
    if (!currentUser || !currentUser.isVip) {
        alert("🔒 Profile picture customization is reserved for VIP members only! Please upgrade to VIP.");
        openPaymentModal();
        return;
    }

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.pfp = e.target.result;
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            updateProfileUI();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function saveProfile(e) {
    e.preventDefault();
    const newName = document.getElementById('editNameInput').value;
    const newBio = document.getElementById('editBioInput').value;
    const pfpUrlInput = document.getElementById('editPfpUrlInput');

    if (currentUser) {
        if (newName) currentUser.name = newName;
        if (pfpUrlInput && pfpUrlInput.value.trim() !== '') {
            if (!currentUser.isVip) {
                alert("🔒 Custom profile pictures are only available for VIP members.");
                openPaymentModal();
                return;
            }
            currentUser.pfp = pfpUrlInput.value.trim();
        }
        localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    }

    if (newBio) document.getElementById('profileBio').innerText = newBio;
    toggleEditProfile();
    updateProfileUI();
}

function toggleEditProfile() {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    const form = document.getElementById('editProfileForm');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// ==========================================
// 7. UI SETTINGS & LOCALIZATION
// ==========================================
function toggleMenu() { document.getElementById('dropdownMenu').classList.toggle('show'); }

window.onclick = function(event) {
    if (!event.target.closest('.hamburger-menu')) {
        const menu = document.getElementById('dropdownMenu');
        if (menu && menu.classList.contains('show')) menu.classList.remove('show');
    }
};

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const dict = translationDictionary[currentLang];
    document.getElementById('themeLabel').innerHTML = isLight ? dict.themeLight : dict.themeDark;
}

function changeLanguage(lang) {
    currentLang = lang;
    const dict = translationDictionary[lang];

    document.getElementById('navCreators').innerText = dict.navCreators;
    document.getElementById('navGroups').innerText = dict.navGroups;
    document.getElementById('navVideos').innerText = dict.navVideos;
    document.getElementById('navLive').innerText = dict.navLive;
    document.getElementById('langLabel').innerText = dict.langLabel;
    
    const isLight = document.body.classList.contains('light-theme');
    document.getElementById('themeLabel').innerHTML = isLight ? dict.themeLight : dict.themeDark;

    document.getElementById('vipLabel').innerHTML = dict.vipLabel;
    document.getElementById('aboutLabel').innerHTML = dict.aboutLabel;
    document.getElementById('logoutLabel').innerHTML = dict.logoutLabel;

    document.getElementById('authModalTitle').innerText = dict.authTitle;
    document.getElementById('loginTabBtn').innerText = dict.loginTab;
    document.getElementById('signupTabBtn').innerText = dict.signupTab;
    document.getElementById('loginIdentifierLabel').innerText = dict.loginIdLabel;
    document.getElementById('loginPasswordLabel').innerText = dict.loginPwdLabel;
    document.getElementById('loginSubmitBtn').innerText = dict.loginSubmit;
    
    document.getElementById('signupNameLabel').innerText = dict.signupNameLabel;
    document.getElementById('signupIdentifierLabel').innerText = dict.signupIdLabel;
    document.getElementById('signupPasswordLabel').innerText = dict.signupPwdLabel;
    document.getElementById('signupConfirmPasswordLabel').innerText = dict.signupConfirmLabel;
    document.getElementById('signupSubmitBtn').innerText = dict.signupSubmit;
    
    document.getElementById('otpLabel').innerText = dict.verifyOtpLabel;
    document.getElementById('verifySubmitBtn').innerText = dict.verifySubmit;

    document.getElementById('paymentModalTitle').innerText = dict.paymentTitle;
    document.getElementById('paymentInstructions').innerText = dict.paymentInst;
    document.getElementById('telebirrAccLabel').innerText = dict.teleLabel;
    document.getElementById('cbeAccLabel').innerText = dict.cbeLabel;
    document.getElementById('copyTeleBtn').innerHTML = dict.copyBtn;
    document.getElementById('copyCbeBtn').innerHTML = dict.copyBtn;
    document.getElementById('fileNameDisplay').innerHTML = dict.uploadLabel;
    document.getElementById('verifyBtn').innerHTML = dict.verifyPayBtn;

    document.getElementById('aboutModalTitle').innerText = dict.aboutTitle;
    document.getElementById('aboutText').innerText = dict.aboutText;
}

// ==========================================
// 8. GRID RENDERING & LAYOUT
// ==========================================
function switchCategory(category, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(category);
    resetTriggerUI();
}

function renderGrid(category) {
    const grid = document.getElementById('contentGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    if (category === 'streams') {
        grid.classList.add('grid-lives');
    } else {
        grid.classList.remove('grid-lives');
    }
    
    data[category].forEach(item => {
        const card = document.createElement('div');
        card.onclick = handleRestrictedAction;

        if (category === 'creators') {
            card.className = 'card-creator';
            card.innerHTML = `
                <div class="creator-pfp-wrapper">
                    <img src="${item.img}" class="creator-pfp" alt="${item.title}">
                    <span class="status-badge ${item.isOnline ? 'online' : 'offline'}"></span>
                </div>
                <div class="creator-name">${item.title}</div>
                <div class="creator-followers">${item.sub}</div>
            `;
        } else if (category === 'channels') {
            card.className = 'card-group';
            card.innerHTML = `
                <img src="${item.img}" class="group-pfp" alt="${item.title}">
                <div class="group-info">
                    <div class="group-title">${item.title}</div>
                    <div class="group-sub">${item.sub}</div>
                </div>
            `;
        } else if (category === 'videos') {
            card.className = 'card-video';
            card.innerHTML = `
                <div class="video-thumb-container">
                    <img src="${item.img}" class="video-thumb" alt="${item.title}">
                </div>
                <div class="video-info">
                    <div class="video-title">${item.title}</div>
                    <div class="video-views">${item.sub}</div>
                </div>
            `;
        } else if (category === 'streams') {
            card.className = 'card-stream';
            card.style.cssText = "display:flex; flex-direction:column; overflow:hidden; text-align:left; position:relative;";
            card.innerHTML = `
                <span class="live-blinking-tag" style="position:absolute; top:8px; left:8px; z-index:2;"><span class="blinking-dot"></span> LIVE</span>
                <img src="${item.img}" class="stream-thumb" alt="${item.title}" style="width:100%; display:block;">
                <div class="stream-info" style="padding:10px 12px; text-align:left; box-sizing:border-box; width:100%;">
                    <div class="card-title" style="font-weight:700; font-size:0.95rem; margin-bottom:4px; text-align:left; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
                    <div class="card-sub" style="font-size:0.8rem; color:var(--text-muted); text-align:left;">${item.sub}</div>
                </div>
            `;
        }

        grid.appendChild(card);
    });
}

function handleRestrictedAction() {
    if (!currentUser) {
        openAuthModal();
    } else {
        openPaymentModal();
    }
}

// Scroll Refresh
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 40) {
        if (!hasTriggeredThisCycle && !isTriggerActive) {
            executeBottomRefreshTrigger();
        }
    }
};

function executeBottomRefreshTrigger() {
    isTriggerActive = true;
    hasTriggeredThisCycle = true;

    const container = document.getElementById('bottomActionContainer');
    const spinner = document.getElementById('bottomSpinner');
    const alertBox = document.getElementById('vipAlertBox');
    const textEl = document.getElementById('vipAlertText');
    const btnEl = document.getElementById('bottomActionBtn');
    const dict = translationDictionary[currentLang];

    if (!container) return;
    container.style.display = 'flex';
    spinner.style.display = 'block';
    alertBox.style.display = 'none';

    setTimeout(() => {
        spinner.style.display = 'none';
        alertBox.style.display = 'flex';

        if (!currentUser) {
            textEl.innerText = dict.bottomTextLoggedOut;
            btnEl.innerText = dict.bottomBtnLoggedOut;
        } else {
            textEl.innerText = dict.bottomTextLoggedIn;
            btnEl.innerText = dict.bottomBtnLoggedIn;
        }

        isTriggerActive = false;
    }, 1200);
}

function resetTriggerUI() {
    hasTriggeredThisCycle = false;
    isTriggerActive = false;
    const container = document.getElementById('bottomActionContainer');
    if (container) container.style.display = 'none';
}

function handleBottomActionClick() {
    resetTriggerUI();
    if (!currentUser) openAuthModal();
    else openPaymentModal();
}

// ==========================================
// 9. AUTHENTICATION & MODALS
// ==========================================
function openAuthModal() { document.getElementById('authModal').style.display = 'flex'; }
function closeAuthModal() { document.getElementById('authModal').style.display = 'none'; resetAuthForms(); }

function resetAuthForms() {
    document.getElementById('loginError').style.display = 'none';
    document.getElementById('passwordComplexityError').style.display = 'none';
    document.getElementById('passwordMatchError').style.display = 'none';
    document.getElementById('otpError').style.display = 'none';
    document.getElementById('verifyCodeForm').style.display = 'none';
}

function toggleAuthForm(type) {
    resetAuthForms();
    if (type === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginTabBtn').classList.add('active');
        document.getElementById('signupTabBtn').classList.remove('active');
    } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('signupTabBtn').classList.add('active');
        document.getElementById('loginTabBtn').classList.remove('active');
    }
}

function validatePassword(pwd) { return pwd.length >= 6 && /[a-zA-Z]/.test(pwd) && /[0-9]/.test(pwd); }

function handleSignupSubmit(e) {
    e.preventDefault();
    resetAuthForms();

    const name = document.getElementById('signupName').value.trim();
    const identifier = document.getElementById('signupIdentifier').value.trim();
    const pwd = document.getElementById('signupPassword').value;
    const confirmPwd = document.getElementById('signupConfirmPassword').value;

    if (!validatePassword(pwd)) {
        document.getElementById('passwordComplexityError').style.display = 'block';
        return;
    }

    if (pwd !== confirmPwd) {
        document.getElementById('passwordMatchError').style.display = 'block';
        return;
    }

    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    pendingUser = { name, identifier, password: pwd, pfp: null, isVip: false };

    document.getElementById('signupForm').style.display = 'none';
    const verifyForm = document.getElementById('verifyCodeForm');
    verifyForm.style.display = 'block';

    document.getElementById('verifyInstructions').innerHTML = `<strong>Verification Code:</strong> <span style="font-size: 1.2rem; color: #e50914; font-weight: 800;">${generatedCode}</span><br>Enter this code below to activate your account.`;
}

function handleVerifyCodeSubmit(e) {
    e.preventDefault();
    const enteredCode = document.getElementById('otpCode').value.trim();

    if (enteredCode === generatedCode && pendingUser) {
        let users = JSON.parse(localStorage.getItem('registeredUsers') || "[]");
        users.push(pendingUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        currentUser = pendingUser;
        localStorage.setItem('loggedInUser', JSON.stringify(pendingUser));

        recalculateUnreadCount();
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';

        closeAuthModal();
        openPaymentModal();
    } else {
        document.getElementById('otpError').style.display = 'block';
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    resetAuthForms();

    const identifier = document.getElementById('loginIdentifier').value.trim();
    const pwd = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('registeredUsers') || "[]");
    const foundUser = users.find(u => u.identifier === identifier && u.password === pwd);

    if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

        recalculateUnreadCount();
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';

        closeAuthModal();
        openPaymentModal();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('loggedInUser');
    updateChatBadge(0);
    updateProfileUI();
    document.getElementById('logoutBtn').style.display = 'none';
    navigateTo('home', document.querySelector('.app-nav-btn[onclick*="home"]'));
    alert("Logged out successfully.");
}

// ==========================================
// 10. PAYMENT & OCR VERIFICATION
// ==========================================
function openPaymentModal() { document.getElementById('paymentModal').style.display = 'flex'; }
function closePaymentModal() { document.getElementById('paymentModal').style.display = 'none'; }
function openAboutUs() { document.getElementById('aboutModal').style.display = 'flex'; }
function closeAboutModal() { document.getElementById('aboutModal').style.display = 'none'; }

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

function handleFileSelect() {
    const input = document.getElementById('receiptInput');
    if(input.files.length > 0) {
        document.getElementById('fileNameDisplay').innerHTML = "<i class='fa-solid fa-file-image'></i> " + input.files[0].name;
    }
}

async function runVerification() {
    const input = document.getElementById('receiptInput');
    const status = document.getElementById('verifyStatus');

    if (!input.files.length) {
        alert("Please attach a screenshot of your payment first.");
        return;
    }

    status.innerText = "Processing screenshot OCR... Please wait.";

    try {
        const file = input.files[0];
        const { data: { text } } = await Tesseract.recognize(file, 'eng');
        const cleanText = text.toLowerCase();

        const hasAmount = cleanText.includes("1000") || cleanText.includes("1,000");
        const hasAcc = cleanText.includes("0950297018") || cleanText.includes("1000783952045");

        if (hasAmount && hasAcc) {
            if (currentUser) {
                currentUser.isVip = true;
                localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            }
            status.innerHTML = "<span style='color: #34c759; font-weight: bold;'>Verification Successful! VIP Granted. Redirecting...</span>";
            setTimeout(() => {
                window.location.href = "https://t.me/+YourPrivateTelegramInviteLink";
            }, 1500);
        } else {
            status.innerHTML = "<span style='color: #e50914;'>❌ Verification Failed. Amount (1000 ETB) or receiver detail mismatch.</span>";
        }
    } catch (err) {
        console.error(err);
        status.innerText = "Error reading image. Please upload a clear receipt.";
    }
}
