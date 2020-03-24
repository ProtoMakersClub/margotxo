import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  English: {
    desc: "Draw, guess and win!",
    nickname: "Nickname:",
    not_empty: "Player nick cannot be empty!",
    play: "Play!",
    leave_room: "Leave Room",
    enter_guess: "Enter guess...",
    play_public: "Public Room",
    play_private: "Private Room",
    public_desc: "Play with anybody online",
    private_desc: "Play with friends in a private room",
    not_found: "Room not found, wrong room name or password.",
    already_exists: "Room already exists, try with a different name.",
    err_joining_or_creating: "Error joining or creating room.",
    fill_inputs: "Fill out all the inputs, please.",
    join_room: "Join Room",
    create_room: "Create Room",
    join_or_create_room: "Join or create private room",
    chat_evt: {
      guessed_word: " has guessed the word!",
      going_to_draw: " is going to draw!",
      reported: "The painter has been reported.",
      player_left: " has left.",
      player_joined: " has joined.",
      player_won: " has won!"
    }
  },
  Español: {
    desc: "Margotu, asmatu eta irabazi!",
    nickname: "Izena:",
    not_empty: "Jokalariaren izena ezin da hutsik egon!",
    play: "Jolastu!",
    leave_room: "Saiotik atera",
    enter_guess: "Sar ezazu hitza...",
    play_public: "Saio publikoa",
    play_private: "Saio pribatua",
    public_desc: "Edozeinekin jolastu",
    not_found: "Saioa ez da aurkitu edo pasahitza okerra da.",
    already_exists: "Gela hau dagoeneko sortuta dago, beste batekin saiatu.",
    err_joining_or_creating: "Errorea gertatu da saioan sartzerakoan.",
    fill_inputs: "Bete itzazu atal guztiak.",
    private_desc: "Jolas ezazu zure lagunekin saio pribatu batean",
    join_room: "Saioan sartu",
    create_room: "Saioa sortu",
    join_or_create_room: "Sortu edo sartu saio pribatu bat",
    chat_evt: {
      guessed_word: " hitza asmatu du!",
      going_to_draw: " margotuko du.",
      reported: "Margolaria kanporatua izan da.",
      player_left: " atera da.",
      player_joined: " sartu da.",
      player_won: " irabazi du!"
    }
  }
};

const i18n = new VueI18n({
  locale: "Español", // set locale
  fallbackLocale: "English", // set fallback locale
  messages // set locale messages
});

export default i18n;
