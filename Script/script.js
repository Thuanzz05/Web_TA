// 50 từ tiếng Anh thông dụng từ A-Z
const vocabulary = [
    // A (40 từ)
    {english: "a", pronunciation: "/ə/", type: "article", vietnamese: "một", example: "I have a car. (Tôi có một chiếc xe hơi.)", image: ""},
    {english: "able", pronunciation: "/ˈeɪbəl/", type: "adjective", vietnamese: "có thể", example: "She is able to speak French. (Cô ấy có thể nói tiếng Pháp.)", image: ""},
    {english: "abandon", pronunciation: "/əˈbæn.dən/", type: "verb", vietnamese: "bỏ, từ bỏ", example: "They abandoned the old house. (Họ đã bỏ căn nhà cũ.)", image: ""},
    {english: "about", pronunciation: "/əˈbaʊt/", type: "preposition", vietnamese: "về", example: "Tell me about yourself. (Hãy kể cho tôi nghe về bản thân bạn.)", image: ""},
    {english: "above", pronunciation: "/əˈbʌv/", type: "preposition", vietnamese: "trên, phía trên", example: "The plane is above the clouds. (Máy bay ở trên các đám mây.)", image: ""},
    {english: "accept", pronunciation: "/ækˈsɛpt/", type: "verb", vietnamese: "chấp nhận", example: "I accept your apology. (Tôi chấp nhận lời xin lỗi của bạn.)", image: ""},
    {english: "across", pronunciation: "/əˈkrɔs/", type: "preposition", vietnamese: "qua", example: "Walk across the street. (Đi qua đường.)", image: ""},
    {english: "action", pronunciation: "/ˈækʃən/", type: "noun", vietnamese: "hành động", example: "Your action was very brave. (Hành động của bạn rất dũng cảm.)", image: ""},
    {english: "add", pronunciation: "/æd/", type: "verb", vietnamese: "thêm", example: "Add some salt to the soup. (Thêm một ít muối vào canh.)", image: ""},
    {english: "after", pronunciation: "/ˈæftər/", type: "preposition", vietnamese: "sau", example: "After dinner, we watched TV. (Sau bữa tối, chúng tôi xem TV.)", image: ""},
    {english: "again", pronunciation: "/əˈɡɛn/", type: "adverb", vietnamese: "lại", example: "Please say it again. (Xin hãy nói lại.)", image: ""},
    {english: "against", pronunciation: "/əˈɡɛnst/", type: "preposition", vietnamese: "chống lại", example: "He is against the plan. (Anh ấy phản đối kế hoạch.)", image: ""},
    {english: "age", pronunciation: "/eɪdʒ/", type: "noun", vietnamese: "tuổi", example: "What is your age? (Bạn bao nhiêu tuổi?)", image: ""},
    {english: "ago", pronunciation: "/əˈɡoʊ/", type: "adverb", vietnamese: "trước đây", example: "I met him three years ago. (Tôi gặp anh ấy ba năm trước.)", image: ""},
    {english: "agree", pronunciation: "/əˈɡri/", type: "verb", vietnamese: "đồng ý", example: "I agree with your opinion. (Tôi đồng ý với ý kiến của bạn.)", image: ""},
    {english: "air", pronunciation: "/ɛr/", type: "noun", vietnamese: "không khí", example: "The air is fresh here. (Không khí ở đây trong lành.)", image: ""},
    {english: "all", pronunciation: "/ɔl/", type: "determiner", vietnamese: "tất cả", example: "All students must attend. (Tất cả học sinh phải tham dự.)", image: ""},
    {english: "allow", pronunciation: "/əˈlaʊ/", type: "verb", vietnamese: "cho phép", example: "They don't allow smoking here. (Họ không cho phép hút thuốc ở đây.)", image: ""},
    {english: "almost", pronunciation: "/ˈɔlmoʊst/", type: "adverb", vietnamese: "hầu như", example: "It's almost midnight. (Gần nửa đêm rồi.)", image: ""},
    {english: "alone", pronunciation: "/əˈloʊn/", type: "adjective", vietnamese: "một mình", example: "She likes to be alone. (Cô ấy thích ở một mình.)", image: ""},
    {english: "along", pronunciation: "/əˈlɔŋ/", type: "preposition", vietnamese: "dọc theo", example: "Walk along the river. (Đi dọc theo sông.)", image: ""},
    {english: "already", pronunciation: "/ɔlˈrɛdi/", type: "adverb", vietnamese: "đã", example: "I already finished my homework. (Tôi đã hoàn thành bài tập.)", image: ""},
    {english: "also", pronunciation: "/ˈɔlsoʊ/", type: "adverb", vietnamese: "cũng", example: "I also like pizza. (Tôi cũng thích pizza.)", image: ""},
    {english: "although", pronunciation: "/ɔlˈðoʊ/", type: "conjunction", vietnamese: "mặc dù", example: "Although it's raining, we'll go out. (Mặc dù trời mưa, chúng ta vẫn đi ra ngoài.)", image: ""},
    {english: "always", pronunciation: "/ˈɔlweɪz/", type: "adverb", vietnamese: "luôn luôn", example: "She always helps me. (Cô ấy luôn giúp tôi.)", image: ""},
    {english: "among", pronunciation: "/əˈmʌŋ/", type: "preposition", vietnamese: "trong số", example: "He is among the best students. (Anh ấy là một trong những học sinh giỏi nhất.)", image: ""},
    {english: "an", pronunciation: "/æn/", type: "article", vietnamese: "một", example: "I ate an apple. (Tôi đã ăn một quả táo.)", image: ""},
    {english: "and", pronunciation: "/ænd/", type: "conjunction", vietnamese: "và", example: "Tom and Jerry are friends. (Tom và Jerry là bạn bè.)", image: ""},
    {english: "anger", pronunciation: "/ˈæŋɡər/", type: "noun", vietnamese: "sự tức giận", example: "He felt a sudden anger. (Anh ấy cảm thấy một cơn giận đột ngột.)", image: ""},
    {english: "animal", pronunciation: "/ˈænəməl/", type: "noun", vietnamese: "động vật", example: "The lion is a wild animal. (Sư tử là động vật hoang dã.)", image: ""},
    {english: "answer", pronunciation: "/ˈænsər/", type: "noun/verb", vietnamese: "trả lời", example: "Please answer my question. (Xin hãy trả lời câu hỏi của tôi.)", image: ""},
    {english: "any", pronunciation: "/ˈɛni/", type: "determiner", vietnamese: "bất kỳ", example: "Do you have any questions? (Bạn có câu hỏi nào không?)", image: ""},
    {english: "appear", pronunciation: "/əˈpɪr/", type: "verb", vietnamese: "xuất hiện", example: "The sun appears in the morning. (Mặt trời xuất hiện vào buổi sáng.)", image: ""},
    {english: "apple", pronunciation: "/ˈæpəl/", type: "noun", vietnamese: "quả táo", example: "I like to eat apples. (Tôi thích ăn táo.)", image: ""},
    {english: "are", pronunciation: "/ɑr/", type: "verb", vietnamese: "thì, là", example: "They are happy. (Họ hạnh phúc.)", image: ""},
    {english: "area", pronunciation: "/ˈɛriə/", type: "noun", vietnamese: "khu vực", example: "This is a residential area. (Đây là khu vực dân cư.)", image: ""},
    {english: "arm", pronunciation: "/ɑrm/", type: "noun", vietnamese: "cánh tay", example: "He broke his arm. (Anh ấy bị gãy tay.)", image: ""},
    {english: "arrange", pronunciation: "/əˈreɪndʒ/", type: "verb", vietnamese: "sắp xếp", example: "Please arrange the chairs. (Xin hãy sắp xếp ghế.)", image: ""},
    {english: "arrive", pronunciation: "/əˈraɪv/", type: "verb", vietnamese: "đến", example: "When will you arrive? (Khi nào bạn đến?)"},
    {english: "art", pronunciation: "/ɑrt/", type: "noun", vietnamese: "nghệ thuật", example: "She loves modern art. (Cô ấy yêu nghệ thuật hiện đại.)", image: ""},
    {english: "as", pronunciation: "/æz/", type: "adverb", vietnamese: "như", example: "She works as a teacher. (Cô ấy làm việc như một giáo viên.)", image: ""},
    {english: "ask", pronunciation: "/æsk/", type: "verb", vietnamese: "hỏi", example: "Can I ask you a question? (Tôi có thể hỏi bạn một câu không?)", image: ""},
    {english: "at", pronunciation: "/æt/", type: "preposition", vietnamese: "tại", example: "I'll meet you at the station. (Tôi sẽ gặp bạn tại nhà ga.)", image: ""},
    {english: "atom", pronunciation: "/ˈætəm/", type: "noun", vietnamese: "nguyên tử", example: "An atom is very small. (Một nguyên tử rất nhỏ.)", image: ""},

    // B (50 từ)
    {english: "baby", pronunciation: "/ˈbeɪbi/", type: "noun", vietnamese: "em bé", example: "The baby is sleeping. (Em bé đang ngủ.)", image: ""},
    {english: "back", pronunciation: "/bæk/", type: "adverb", vietnamese: "trở lại", example: "Come back soon. (Hãy trở lại sớm.)", image: ""},
    {english: "bad", pronunciation: "/bæd/", type: "adjective", vietnamese: "xấu, tệ", example: "This is bad weather. (Đây là thời tiết xấu.)", image: ""},
    {english: "ball", pronunciation: "/bɔl/", type: "noun", vietnamese: "quả bóng", example: "The children are playing with a ball. (Các em bé đang chơi với quả bóng.)", image: ""},
    {english: "band", pronunciation: "/bænd/", type: "noun", vietnamese: "ban nhạc", example: "My favorite band is playing tonight. (Ban nhạc yêu thích của tôi sẽ biểu diễn tối nay.)", image: ""},
    {english: "bank", pronunciation: "/bæŋk/", type: "noun", vietnamese: "ngân hàng", example: "I need to go to the bank. (Tôi cần đi ngân hàng.)", image: ""},
    {english: "bar", pronunciation: "/bɑr/", type: "noun", vietnamese: "quán bar", example: "Let's meet at the bar. (Hãy gặp nhau ở quán bar.)", image: ""},
    {english: "base", pronunciation: "/beɪs/", type: "noun", vietnamese: "cơ sở", example: "The company has its base in Tokyo. (Công ty có cơ sở tại Tokyo.)", image: ""},
    {english: "basic", pronunciation: "/ˈbeɪsɪk/", type: "adjective", vietnamese: "cơ bản", example: "Learn the basic rules first. (Hãy học các quy tắc cơ bản trước.)", image: ""},
    {english: "bat", pronunciation: "/bæt/", type: "noun", vietnamese: "gậy bóng chày", example: "He hit the ball with a bat. (Anh ấy đánh bóng bằng gậy.)", image: ""},
    {english: "be", pronunciation: "/bi/", type: "verb", vietnamese: "là, thì", example: "I want to be a doctor. (Tôi muốn trở thành bác sĩ.)", image: ""},
    {english: "bear", pronunciation: "/bɛr/", type: "verb", vietnamese: "chịu đựng, mang", example: "I can't bear the pain. (Tôi không thể chịu đựng nỗi đau.)", image: ""},
    {english: "beat", pronunciation: "/bit/", type: "verb", vietnamese: "đánh bại", example: "Our team beat theirs 3-0. (Đội chúng tôi đánh bại họ 3-0.)", image: ""},
    {english: "beauty", pronunciation: "/ˈbjuti/", type: "noun", vietnamese: "vẻ đẹp", example: "Her beauty is captivating. (Vẻ đẹp của cô ấy rất quyến rũ.)", image: ""},
    {english: "bed", pronunciation: "/bɛd/", type: "noun", vietnamese: "giường", example: "I go to bed at 10 PM. (Tôi đi ngủ lúc 10 giờ tối.)", image: ""},
    {english: "been", pronunciation: "/bɪn/", type: "verb", vietnamese: "đã (quá khứ của be)", example: "I have been there before. (Tôi đã ở đó trước đây.)", image: ""},
    {english: "before", pronunciation: "/bɪˈfɔr/", type: "preposition", vietnamese: "trước", example: "Think before you speak. (Hãy suy nghĩ trước khi nói.)", image: ""},
    {english: "began", pronunciation: "/bɪˈɡæn/", type: "verb", vietnamese: "đã bắt đầu (quá khứ của begin)", example: "The show began an hour ago. (Buổi biểu diễn đã bắt đầu một giờ trước.)", image: ""},
    {english: "begin", pronunciation: "/bɪˈɡɪn/", type: "verb", vietnamese: "bắt đầu", example: "Let's begin the meeting. (Hãy bắt đầu cuộc họp.)", image: ""},
    {english: "behind", pronunciation: "/bɪˈhaɪnd/", type: "preposition", vietnamese: "đằng sau", example: "The car is behind the house. (Xe hơi ở đằng sau ngôi nhà.)", image: ""},
    {english: "believe", pronunciation: "/bɪˈliv/", type: "verb", vietnamese: "tin tưởng", example: "I believe in you. (Tôi tin tưởng vào bạn.)", image: ""},
    {english: "bell", pronunciation: "/bɛl/", type: "noun", vietnamese: "cái chuông", example: "The bell rang loudly. (Cái chuông kêu to.)", image: ""},
    {english: "best", pronunciation: "/bɛst/", type: "adjective", vietnamese: "tốt nhất", example: "This is the best restaurant in town. (Đây là nhà hàng tốt nhất trong thị trấn.)", image: ""},
    {english: "better", pronunciation: "/ˈbɛtər/", type: "adjective", vietnamese: "tốt hơn", example: "This book is better than that one. (Cuốn sách này tốt hơn cuốn kia.)", image: ""},
    {english: "between", pronunciation: "/bɪˈtwin/", type: "preposition", vietnamese: "giữa", example: "The ball is between the two trees. (Quả bóng ở giữa hai cái cây.)", image: ""},
    {english: "big", pronunciation: "/bɪɡ/", type: "adjective", vietnamese: "lớn", example: "That's a big house. (Đó là một ngôi nhà lớn.)", image: ""},
    {english: "bird", pronunciation: "/bɜrd/", type: "noun", vietnamese: "con chim", example: "The bird is singing. (Con chim đang hót.)", image: ""},
    {english: "bit", pronunciation: "/bɪt/", type: "noun", vietnamese: "một chút", example: "I need a bit more time. (Tôi cần thêm một chút thời gian.)", image: ""},
    {english: "black", pronunciation: "/blæk/", type: "adjective", vietnamese: "màu đen", example: "She has black hair. (Cô ấy có mái tóc đen.)", image: ""},
    {english: "block", pronunciation: "/blɑk/", type: "noun/verb", vietnamese: "khối/chặn", example: "The road is blocked. (Con đường bị chặn.)", image: ""},
    {english: "blood", pronunciation: "/blʌd/", type: "noun", vietnamese: "máu", example: "Blood is red. (Máu có màu đỏ.)", image: ""},
    {english: "blow", pronunciation: "/bloʊ/", type: "verb", vietnamese: "thổi", example: "The wind is blowing. (Gió đang thổi.)", image: ""},
    {english: "blue", pronunciation: "/blu/", type: "adjective", vietnamese: "màu xanh", example: "The sky is blue. (Bầu trời có màu xanh.)", image: ""},
    {english: "board", pronunciation: "/bɔrd/", type: "noun", vietnamese: "bảng", example: "Write on the board. (Viết lên bảng.)", image: ""},
    {english: "boat", pronunciation: "/boʊt/", type: "noun", vietnamese: "thuyền", example: "We went fishing by boat. (Chúng tôi đi câu cá bằng thuyền.)", image: ""},
    {english: "body", pronunciation: "/ˈbɑdi/", type: "noun", vietnamese: "cơ thể", example: "Exercise is good for your body. (Tập thể dục tốt cho cơ thể.)", image: ""},
    {english: "bone", pronunciation: "/boʊn/", type: "noun", vietnamese: "xương", example: "Dogs like to chew on bones. (Chó thích gặm xương.)", image: ""},
    {english: "book", pronunciation: "/bʊk/", type: "noun", vietnamese: "sách", example: "I'm reading a good book. (Tôi đang đọc một cuốn sách hay.)", image: ""},
    {english: "born", pronunciation: "/bɔrn/", type: "verb", vietnamese: "sinh ra", example: "She was born in 1990. (Cô ấy sinh năm 1990.)", image: ""},
    {english: "both", pronunciation: "/boʊθ/", type: "determiner", vietnamese: "cả hai", example: "Both of them are my friends. (Cả hai đều là bạn tôi.)", image: ""},
    {english: "bottom", pronunciation: "/ˈbɑtəm/", type: "noun", vietnamese: "đáy", example: "The book is at the bottom of the bag. (Cuốn sách ở dưới đáy túi.)", image: ""},
    {english: "bought", pronunciation: "/bɔt/", type: "verb", vietnamese: "đã mua (quá khứ của buy)", example: "I bought a new phone. (Tôi đã mua một chiếc điện thoại mới.)", image: ""},
    {english: "box", pronunciation: "/bɑks/", type: "noun", vietnamese: "hộp", example: "Put the toys in the box. (Đặt đồ chơi vào hộp.)", image: ""},
    {english: "boy", pronunciation: "/bɔɪ/", type: "noun", vietnamese: "cậu bé", example: "The boy is playing football. (Cậu bé đang chơi bóng đá.)", image: ""},
    {english: "branch", pronunciation: "/bræntʃ/", type: "noun", vietnamese: "cành cây/nhánh", example: "The bird sat on a branch. (Con chim đậu trên cành cây.)", image: ""},
    {english: "bread", pronunciation: "/brɛd/", type: "noun", vietnamese: "bánh mì", example: "I eat bread for breakfast. (Tôi ăn bánh mì vào bữa sáng.)", image: ""},
    {english: "break", pronunciation: "/breɪk/", type: "verb", vietnamese: "phá vỡ", example: "Don't break the glass. (Đừng làm vỡ ly.)", image: ""},
    {english: "bright", pronunciation: "/braɪt/", type: "adjective", vietnamese: "sáng", example: "The sun is very bright today. (Mặt trời hôm nay rất sáng.)", image: ""},
    {english: "bring", pronunciation: "/brɪŋ/", type: "verb", vietnamese: "mang đến", example: "Please bring your books tomorrow. (Xin hãy mang sách đến vào ngày mai.)", image: ""},
    {english: "broad", pronunciation: "/brɔd/", type: "adjective", vietnamese: "rộng", example: "The river is very broad. (Con sông rất rộng.)", image: ""},
    {english: "broke", pronunciation: "/broʊk/", type: "verb", vietnamese: "đã làm vỡ (quá khứ của break)", example: "He broke his leg. (Anh ấy đã bị gãy chân.)", image: ""},
    {english: "brother", pronunciation: "/ˈbrʌðər/", type: "noun", vietnamese: "anh/em trai", example: "My brother is a doctor. (Anh trai tôi là bác sĩ.)", image: ""},
    {english: "brought", pronunciation: "/brɔt/", type: "verb", vietnamese: "đã mang (quá khứ của bring)", example: "She brought me flowers. (Cô ấy đã mang hoa cho tôi.)", image: ""},
    {english: "brown", pronunciation: "/braʊn/", type: "adjective", vietnamese: "màu nâu", example: "He has brown eyes. (Anh ấy có mắt màu nâu.)", image: ""},
    {english: "build", pronunciation: "/bɪld/", type: "verb", vietnamese: "xây dựng", example: "They will build a new school. (Họ sẽ xây một trường học mới.)", image: ""},
    {english: "burn", pronunciation: "/bɜrn/", type: "verb", vietnamese: "đốt, cháy", example: "The fire is burning brightly. (Ngọn lửa đang cháy sáng.)", image: ""},
    {english: "busy", pronunciation: "/ˈbɪzi/", type: "adjective", vietnamese: "bận rộn", example: "I'm very busy today. (Hôm nay tôi rất bận.)", image: ""},
    {english: "but", pronunciation: "/bʌt/", type: "conjunction", vietnamese: "nhưng", example: "I like coffee but not tea. (Tôi thích cà phê nhưng không thích trà.)", image: ""},
    {english: "buy", pronunciation: "/baɪ/", type: "verb", vietnamese: "mua", example: "I want to buy a new car. (Tôi muốn mua một chiếc xe mới.)", image: ""},
    {english: "by", pronunciation: "/baɪ/", type: "preposition", vietnamese: "bởi", example: "The book was written by Shakespeare. (Cuốn sách được viết bởi Shakespeare.)", image: ""},

    // C (60 từ)
    {english: "call", pronunciation: "/kɔl/", type: "verb", vietnamese: "gọi", example: "Please call me tonight. (Hãy gọi cho tôi tối nay.)", image: ""},
    {english: "came", pronunciation: "/keɪm/", type: "verb", vietnamese: "đã đến (quá khứ của come)", example: "He came home late. (Anh ấy đã về nhà muộn.)", image: ""},
    {english: "camp", pronunciation: "/kæmp/", type: "noun/verb", vietnamese: "trại/cắm trại", example: "We set up camp by the river. (Chúng tôi cắm trại bên sông.)", image: ""},
    {english: "can", pronunciation: "/kæn/", type: "modal verb", vietnamese: "có thể", example: "I can speak English. (Tôi có thể nói tiếng Anh.)", image: ""},
    {english: "capital", pronunciation: "/ˈkæpɪtəl/", type: "noun", vietnamese: "thủ đô", example: "Hanoi is the capital of Vietnam. (Hà Nội là thủ đô của Việt Nam.)", image: ""},
    {english: "captain", pronunciation: "/ˈkæptɪn/", type: "noun", vietnamese: "thuyền trưởng", example: "The ship's captain is experienced. (Thuyền trưởng con tàu rất kinh nghiệm.)", image: ""},
    {english: "car", pronunciation: "/kɑr/", type: "noun", vietnamese: "xe hơi", example: "My car is red. (Xe hơi của tôi màu đỏ.)", image: ""},
    {english: "card", pronunciation: "/kɑrd/", type: "noun", vietnamese: "thẻ", example: "Do you have a credit card? (Bạn có thẻ tín dụng không?)", image: ""},
    {english: "care", pronunciation: "/kɛr/", type: "noun/verb", vietnamese: "chăm sóc", example: "Take care of yourself. (Hãy chăm sóc bản thân.)", image: ""},
    {english: "carry", pronunciation: "/ˈkæri/", type: "verb", vietnamese: "mang, vác", example: "Can you carry this bag? (Bạn có thể mang túi này không?)", image: ""},
    {english: "case", pronunciation: "/keɪs/", type: "noun", vietnamese: "trường hợp", example: "In this case, we should wait. (Trong trường hợp này, chúng ta nên đợi.)", image: ""},
    {english: "cat", pronunciation: "/kæt/", type: "noun", vietnamese: "con mèo", example: "My cat loves to sleep. (Con mèo của tôi thích ngủ.)", image: ""},
    {english: "catch", pronunciation: "/kætʃ/", type: "verb", vietnamese: "bắt", example: "Catch the ball! (Bắt lấy quả bóng!)", image: ""},
    {english: "caught", pronunciation: "/kɔt/", type: "verb", vietnamese: "đã bắt (quá khứ của catch)", example: "He caught the fish. (Anh ấy đã bắt được con cá.)", image: ""},
    {english: "cause", pronunciation: "/kɔz/", type: "noun/verb", vietnamese: "nguyên nhân", example: "What's the cause of the problem? (Nguyên nhân của vấn đề là gì?)", image: ""},
    {english: "cell", pronunciation: "/sɛl/", type: "noun", vietnamese: "tế bào/ô", example: "A plant cell is microscopic. (Một tế bào thực vật là cực nhỏ.)", image: ""},
    {english: "cent", pronunciation: "/sɛnt/", type: "noun", vietnamese: "xu (đơn vị tiền)", example: "I have 50 cents. (Tôi có 50 xu.)", image: ""},
    {english: "center", pronunciation: "/ˈsɛntər/", type: "noun", vietnamese: "trung tâm", example: "The city center is very busy. (Trung tâm thành phố rất nhộn nhịp.)", image: ""},
    {english: "century", pronunciation: "/ˈsɛntʃəri/", type: "noun", vietnamese: "thế kỷ", example: "This building is a century old. (Tòa nhà này đã một thế kỷ tuổi.)", image: ""},
    {english: "certain", pronunciation: "/ˈsɜrtən/", type: "adjective", vietnamese: "chắc chắn", example: "I'm certain of my decision. (Tôi chắc chắn về quyết định của mình.)", image: ""},
    {english: "chair", pronunciation: "/tʃɛr/", type: "noun", vietnamese: "ghế", example: "Please sit on the chair. (Xin hãy ngồi trên ghế.)", image: ""},
    {english: "chance", pronunciation: "/tʃæns/", type: "noun", vietnamese: "cơ hội", example: "Give me another chance. (Hãy cho tôi một cơ hội khác.)", image: ""},
    {english: "change", pronunciation: "/tʃeɪndʒ/", type: "verb/noun", vietnamese: "thay đổi", example: "People change over time. (Con người thay đổi theo thời gian.)", image: ""},
    {english: "character", pronunciation: "/ˈkærəktər/", type: "noun", vietnamese: "nhân vật", example: "The main character is brave. (Nhân vật chính rất dũng cảm.)", image: ""},
    {english: "charge", pronunciation: "/tʃɑrdʒ/", type: "noun/verb", vietnamese: "phí/sạc", example: "Is there a charge for delivery? (Có phí giao hàng không?)", image: ""},
    {english: "chart", pronunciation: "/tʃɑrt/", type: "noun/verb", vietnamese: "biểu đồ", example: "Look at the sales chart. (Hãy nhìn vào biểu đồ doanh số.)", image: ""},
    {english: "check", pronunciation: "/tʃɛk/", type: "verb", vietnamese: "kiểm tra", example: "Check your email. (Kiểm tra email của bạn.)", image: ""},
    {english: "chick", pronunciation: "/tʃɪk/", type: "noun", vietnamese: "gà con", example: "The hen has many chicks. (Gà mái có nhiều gà con.)", image: ""},
    {english: "chief", pronunciation: "/tʃif/", type: "adjective/noun", vietnamese: "chính/thủ lĩnh", example: "He is the chief executive officer. (Anh ấy là giám đốc điều hành chính.)", image: ""},
    {english: "child", pronunciation: "/tʃaɪld/", type: "noun", vietnamese: "đứa trẻ", example: "The child is playing. (Đứa trẻ đang chơi.)", image: ""},
    {english: "children", pronunciation: "/ˈtʃɪldrən/", type: "noun", vietnamese: "những đứa trẻ", example: "Children love toys. (Những đứa trẻ thích đồ chơi.)", image: ""},
    {english: "choose", pronunciation: "/tʃuz/", type: "verb", vietnamese: "chọn", example: "Choose the best option. (Chọn lựa chọn tốt nhất.)", image: ""},
    {english: "chord", pronunciation: "/kɔrd/", type: "noun", vietnamese: "hợp âm (âm nhạc)", example: "Play a C major chord. (Chơi hợp âm Đô trưởng.)", image: ""},
    {english: "circle", pronunciation: "/ˈsɜrkl/", type: "noun", vietnamese: "hình tròn", example: "Draw a circle. (Vẽ một hình tròn.)", image: ""},
    {english: "city", pronunciation: "/ˈsɪti/", type: "noun", vietnamese: "thành phố", example: "New York is a big city. (New York là một thành phố lớn.)", image: ""},
    {english: "claim", pronunciation: "/kleɪm/", type: "verb/noun", vietnamese: "tuyên bố/yêu sách", example: "He claims to be innocent. (Anh ấy tuyên bố vô tội.)", image: ""},
    {english: "class", pronunciation: "/klæs/", type: "noun", vietnamese: "lớp học", example: "I have an English class today. (Hôm nay tôi có lớp tiếng Anh.)", image: ""},
    {english: "clean", pronunciation: "/klin/", type: "adjective/verb", vietnamese: "sạch/làm sạch", example: "Keep your room clean. (Giữ phòng của bạn sạch.)", image: ""},
    {english: "clear", pronunciation: "/klɪr/", type: "adjective", vietnamese: "rõ ràng", example: "The instructions are clear. (Hướng dẫn rất rõ ràng.)", image: ""},
    {english: "climb", pronunciation: "/klaɪm/", type: "verb", vietnamese: "leo trèo", example: "They climbed the mountain. (Họ leo núi.)", image: ""},
    {english: "clock", pronunciation: "/klɑk/", type: "noun", vietnamese: "đồng hồ", example: "The clock is on the wall. (Đồng hồ treo trên tường.)", image: ""},
    {english: "close", pronunciation: "/kloʊs/", type: "verb", vietnamese: "đóng", example: "Please close the door. (Xin hãy đóng cửa.)", image: ""},
    {english: "clothe", pronunciation: "/kloʊð/", type: "verb", vietnamese: "mặc quần áo cho", example: "She clothed the baby in warm clothes. (Cô ấy mặc cho em bé quần áo ấm.)", image: ""},
    {english: "cloud", pronunciation: "/klaʊd/", type: "noun", vietnamese: "mây", example: "The sky is full of clouds. (Bầu trời đầy mây.)", image: ""},
    {english: "coast", pronunciation: "/koʊst/", type: "noun", vietnamese: "bờ biển", example: "We walked along the coast. (Chúng tôi đi dọc bờ biển.)", image: ""},
    {english: "coat", pronunciation: "/koʊt/", type: "noun", vietnamese: "áo khoác", example: "Wear your coat, it's cold. (Mặc áo khoác vào, trời lạnh.)", image: ""},
    {english: "cold", pronunciation: "/koʊld/", type: "adjective", vietnamese: "lạnh", example: "It's cold outside. (Bên ngoài lạnh.)", image: ""},
    {english: "collect", pronunciation: "/kəˈlɛkt/", type: "verb", vietnamese: "sưu tập", example: "She collects stamps. (Cô ấy sưu tập tem.)", image: ""},
    {english: "colony", pronunciation: "/ˈkɑləni/", type: "noun", vietnamese: "thuộc địa", example: "India was a British colony. (Ấn Độ từng là thuộc địa của Anh.)", image: ""},
    {english: "color", pronunciation: "/ˈkʌlər/", type: "noun", vietnamese: "màu sắc", example: "What's your favorite color? (Màu sắc yêu thích của bạn là gì?)"},
    {english: "column", pronunciation: "/ˈkɑləm/", type: "noun", vietnamese: "cột", example: "The building has tall columns. (Tòa nhà có những cột cao.)", image: ""},
    {english: "come", pronunciation: "/kʌm/", type: "verb", vietnamese: "đến", example: "Come here please. (Hãy đến đây.)", image: ""},
    {english: "common", pronunciation: "/ˈkɑmən/", type: "adjective", vietnamese: "phổ biến", example: "It's a common problem. (Đó là một vấn đề phổ biến.)", image: ""},
    {english: "company", pronunciation: "/ˈkʌmpəni/", type: "noun", vietnamese: "công ty", example: "She works for a big company. (Cô ấy làm việc cho một công ty lớn.)", image: ""},
    {english: "compare", pronunciation: "/kəmˈpɛr/", type: "verb", vietnamese: "so sánh", example: "Compare these two photos. (So sánh hai bức ảnh này.)", image: ""},
    {english: "complete", pronunciation: "/kəmˈplit/", type: "verb", vietnamese: "hoàn thành", example: "Please complete the form. (Xin hãy hoàn thành mẫu đơn.)", image: ""},
    {english: "condition", pronunciation: "/kənˈdɪʃən/", type: "noun", vietnamese: "điều kiện", example: "The car is in good condition. (Chiếc xe đang trong tình trạng tốt.)", image: ""},
    {english: "connect", pronunciation: "/kəˈnɛkt/", type: "verb", vietnamese: "kết nối", example: "Connect the two wires. (Nối hai sợi dây lại.)", image: ""},
    {english: "consonant", pronunciation: "/ˈkɑnsənənt/", type: "noun", vietnamese: "phụ âm", example: "B is a consonant. (B là một phụ âm.)", image: ""},
    {english: "contain", pronunciation: "/kənˈteɪn/", type: "verb", vietnamese: "chứa", example: "The box contains old toys. (Cái hộp chứa đồ chơi cũ.)", image: ""},
    {english: "continent", pronunciation: "/ˈkɑntɪnənt/", type: "noun", vietnamese: "lục địa", example: "Africa is a large continent. (Châu Phi là một lục địa lớn.)", image: ""},
    {english: "continue", pronunciation: "/kənˈtɪnju/", type: "verb", vietnamese: "tiếp tục", example: "Please continue your work. (Xin hãy tiếp tục công việc của bạn.)", image: ""},
    {english: "control", pronunciation: "/kənˈtroʊl/", type: "verb/noun", vietnamese: "kiểm soát", example: "You need to control your emotions. (Bạn cần kiểm soát cảm xúc.)", image: ""},
    {english: "cook", pronunciation: "/kʊk/", type: "verb/noun", vietnamese: "nấu ăn/người nấu ăn", example: "She loves to cook. (Cô ấy thích nấu ăn.)", image: ""},
    {english: "cool", pronunciation: "/kul/", type: "adjective", vietnamese: "mát mẻ", example: "It's a cool morning. (Buổi sáng mát mẻ.)", image: ""},
    {english: "copy", pronunciation: "/ˈkɑpi/", type: "noun/verb", vietnamese: "bản sao/sao chép", example: "Make a copy of the document. (Tạo một bản sao tài liệu.)", image: ""},
    {english: "corn", pronunciation: "/kɔrn/", type: "noun", vietnamese: "ngô", example: "We had corn for dinner. (Chúng tôi ăn ngô vào bữa tối.)", image: ""},
    {english: "corner", pronunciation: "/ˈkɔrnər/", type: "noun", vietnamese: "góc", example: "The shop is on the corner. (Cửa hàng ở góc phố.)", image: ""},
    {english: "correct", pronunciation: "/kəˈrɛkt/", type: "adjective/verb", vietnamese: "đúng/sửa chữa", example: "Your answer is correct. (Câu trả lời của bạn đúng.)", image: ""},
    {english: "cost", pronunciation: "/kɔst/", type: "noun/verb", vietnamese: "chi phí", example: "How much does it cost? (Nó có giá bao nhiêu?)", image: ""},
    {english: "cotton", pronunciation: "/ˈkɑtən/", type: "noun", vietnamese: "bông", example: "This shirt is made of cotton. (Chiếc áo này làm bằng bông.)", image: ""},
    {english: "could", pronunciation: "/kʊd/", type: "modal verb", vietnamese: "có thể", example: "Could you help me? (Bạn có thể giúp tôi không?)", image: ""},
    {english: "count", pronunciation: "/kaʊnt/", type: "verb", vietnamese: "đếm", example: "Count from one to ten. (Đếm từ một đến mười.)", image: ""},
    {english: "country", pronunciation: "/ˈkʌntri/", type: "noun", vietnamese: "đất nước", example: "Vietnam is a beautiful country. (Việt Nam là một đất nước đẹp.)", image: ""},
    {english: "course", pronunciation: "/kɔrs/", type: "noun", vietnamese: "khóa học", example: "I'm taking a cooking course. (Tôi đang học khóa nấu ăn.)", image: ""},
    {english: "cover", pronunciation: "/ˈkʌvər/", type: "verb", vietnamese: "che phủ", example: "Cover the pot with a lid. (Đậy nồi bằng nắp.)", image: ""},
    {english: "cow", pronunciation: "/kaʊ/", type: "noun", vietnamese: "con bò cái", example: "A cow gives milk. (Bò cái cho sữa.)", image: ""},
    {english: "create", pronunciation: "/kriˈeɪt/", type: "verb", vietnamese: "tạo ra", example: "Artists create beautiful works. (Nghệ sĩ tạo ra những tác phẩm đẹp.)", image: ""},
    {english: "crease", pronunciation: "/kris/", type: "noun", vietnamese: "nếp gấp/nếp nhăn", example: "Iron out the creases in your shirt. (Là phẳng các nếp nhăn trên áo sơ mi của bạn.)", image: ""},
    {english: "crop", pronunciation: "/krɑp/", type: "noun", vietnamese: "vụ mùa", example: "The main crop here is rice. (Cây trồng chính ở đây là lúa.)", image: ""},
    {english: "cross", pronunciation: "/krɔs/", type: "noun/verb", vietnamese: "thập tự/băng qua", example: "Cross the road carefully. (Băng qua đường cẩn thận.)", image: ""},
    {english: "crowd", pronunciation: "/kraʊd/", type: "noun", vietnamese: "đám đông", example: "A large crowd gathered. (Một đám đông lớn đã tụ tập.)", image: ""},
    {english: "cry", pronunciation: "/kraɪ/", type: "verb/noun", vietnamese: "khóc/tiếng kêu", example: "Don't cry. (Đừng khóc.)", image: ""},
    {english: "current", pronunciation: "/ˈkɜrənt/", type: "adjective/noun", vietnamese: "hiện tại/dòng chảy", example: "What's the current situation? (Tình hình hiện tại như thế nào?)"},
    {english: "cut", pronunciation: "/kʌt/", type: "verb", vietnamese: "cắt", example: "Cut the paper with scissors. (Cắt giấy bằng kéo.)", image: ""},

    // D (50 từ)
    {english: "dad", pronunciation: "/dæd/", type: "noun", vietnamese: "bố, cha", example: "My dad is a great cook. (Bố tôi là một đầu bếp giỏi.)", image: ""},
    {english: "dance", pronunciation: "/dæns/", type: "verb/noun", vietnamese: "nhảy/điệu nhảy", example: "Let's dance all night. (Hãy nhảy suốt đêm.)", image: ""},
    {english: "danger", pronunciation: "/ˈdeɪndʒər/", type: "noun", vietnamese: "nguy hiểm", example: "He is in danger. (Anh ấy đang gặp nguy hiểm.)", image: ""},
    {english: "dark", pronunciation: "/dɑrk/", type: "adjective", vietnamese: "tối", example: "It's getting dark outside. (Bên ngoài đang tối dần.)", image: ""},
    {english: "day", pronunciation: "/deɪ/", type: "noun", vietnamese: "ngày", example: "Today is a beautiful day. (Hôm nay là một ngày đẹp trời.)", image: ""},
    {english: "dead", pronunciation: "/dɛd/", type: "adjective", vietnamese: "chết", example: "The flowers are dead. (Những bông hoa đã chết.)", image: ""},
    {english: "deal", pronunciation: "/dil/", type: "verb/noun", vietnamese: "thỏa thuận/xử lý", example: "Let's make a deal. (Hãy thỏa thuận với nhau.)", image: ""},
    {english: "dear", pronunciation: "/dɪr/", type: "adjective", vietnamese: "thân mến", example: "My dear friend. (Người bạn thân mến của tôi.)", image: ""},
    {english: "death", pronunciation: "/dɛθ/", type: "noun", vietnamese: "cái chết", example: "Death is part of life. (Cái chết là một phần của cuộc sống.)", image: ""},
    {english: "decide", pronunciation: "/dɪˈsaɪd/", type: "verb", vietnamese: "quyết định", example: "You need to decide quickly. (Bạn cần quyết định nhanh chóng.)", image: ""},
    {english: "decimal", pronunciation: "/ˈdɛsɪməl/", type: "adjective", vietnamese: "thập phân", example: "0.5 is a decimal number. (0.5 là một số thập phân.)", image: ""},
    {english: "deep", pronunciation: "/dip/", type: "adjective", vietnamese: "sâu", example: "The ocean is very deep. (Đại dương rất sâu.)", image: ""},
    {english: "degree", pronunciation: "/dɪˈɡri/", type: "noun", vietnamese: "mức độ/bằng cấp", example: "She has a master's degree. (Cô ấy có bằng thạc sĩ.)", image: ""},
    {english: "depend", pronunciation: "/dɪˈpɛnd/", type: "verb", vietnamese: "phụ thuộc", example: "It depends on the weather. (Nó phụ thuộc vào thời tiết.)", image: ""},
    {english: "describe", pronunciation: "/dɪˈskraɪb/", type: "verb", vietnamese: "miêu tả", example: "Can you describe the picture? (Bạn có thể miêu tả bức tranh không?)", image: ""},
    {english: "desert", pronunciation: "/ˈdɛzərt/", type: "noun", vietnamese: "sa mạc", example: "The Sahara is a vast desert. (Sahara là một sa mạc rộng lớn.)", image: ""},
    {english: "design", pronunciation: "/dɪˈzaɪn/", type: "verb/noun", vietnamese: "thiết kế", example: "She likes to design clothes. (Cô ấy thích thiết kế quần áo.)", image: ""},
    {english: "determine", pronunciation: "/dɪˈtɜrmɪn/", type: "verb", vietnamese: "xác định", example: "We need to determine the cause. (Chúng ta cần xác định nguyên nhân.)", image: ""},
    {english: "develop", pronunciation: "/dɪˈvɛləp/", type: "verb", vietnamese: "phát triển", example: "We need to develop new skills. (Chúng ta cần phát triển kỹ năng mới.)", image: ""},
    {english: "dictionary", pronunciation: "/ˈdɪkʃəˌnɛri/", type: "noun", vietnamese: "từ điển", example: "Look up the word in a dictionary. (Tra từ trong từ điển.)", image: ""},
    {english: "did", pronunciation: "/dɪd/", type: "verb", vietnamese: "đã làm (quá khứ của do)", example: "I did my homework. (Tôi đã làm bài tập về nhà.)", image: ""},
    {english: "die", pronunciation: "/daɪ/", type: "verb", vietnamese: "chết", example: "Plants die without water. (Cây cối chết nếu không có nước.)", image: ""},
    {english: "differ", pronunciation: "/ˈdɪfər/", type: "verb", vietnamese: "khác biệt", example: "Opinions differ on this topic. (Ý kiến khác nhau về chủ đề này.)", image: ""},
    {english: "difficult", pronunciation: "/ˈdɪfəkəlt/", type: "adjective", vietnamese: "khó khăn", example: "This test is very difficult. (Bài kiểm tra này rất khó.)", image: ""},
    {english: "direct", pronunciation: "/dɪˈrɛkt/", type: "adjective/verb", vietnamese: "trực tiếp/chỉ dẫn", example: "Go direct to the airport. (Đi thẳng đến sân bay.)", image: ""},
    {english: "discuss", pronunciation: "/dɪˈskʌs/", type: "verb", vietnamese: "thảo luận", example: "Let's discuss the issue. (Hãy thảo luận về vấn đề này.)", image: ""},
    {english: "distant", pronunciation: "/ˈdɪstənt/", type: "adjective", vietnamese: "xa xôi", example: "He comes from a distant land. (Anh ấy đến từ một vùng đất xa xôi.)", image: ""},
    {english: "divide", pronunciation: "/dɪˈvaɪd/", type: "verb", vietnamese: "chia", example: "Divide the cake into four parts. (Chia bánh thành bốn phần.)", image: ""},
    {english: "division", pronunciation: "/dɪˈvɪʒən/", type: "noun", vietnamese: "sự chia", example: "The division of labor is important. (Sự phân công lao động rất quan trọng.)", image: ""},
    {english: "do", pronunciation: "/du/", type: "verb", vietnamese: "làm", example: "What do you do? (Bạn làm nghề gì?)", image: ""},
    {english: "doctor", pronunciation: "/ˈdɑktər/", type: "noun", vietnamese: "bác sĩ", example: "She wants to be a doctor. (Cô ấy muốn trở thành bác sĩ.)", image: ""},
    {english: "does", pronunciation: "/dʌz/", type: "verb", vietnamese: "làm (dạng của do)", example: "He does his best. (Anh ấy làm hết sức mình.)", image: ""},
    {english: "dog", pronunciation: "/dɔɡ/", type: "noun", vietnamese: "chó", example: "My dog is very friendly. (Con chó của tôi rất thân thiện.)", image: ""},
    {english: "dollar", pronunciation: "/ˈdɑlər/", type: "noun", vietnamese: "đô la", example: "This costs ten dollars. (Cái này giá mười đô la.)", image: ""},
    {english: "done", pronunciation: "/dʌn/", type: "verb", vietnamese: "đã làm (quá khứ của do)", example: "I have done my work. (Tôi đã hoàn thành công việc của mình.)", image: ""},
    {english: "door", pronunciation: "/dɔr/", type: "noun", vietnamese: "cửa", example: "Close the door, please. (Làm ơn đóng cửa lại.)", image: ""},
    {english: "double", pronunciation: "/ˈdʌbəl/", type: "adjective/verb", vietnamese: "gấp đôi", example: "I ordered a double cheeseburger. (Tôi đã gọi một chiếc burger phô mai gấp đôi.)", image: ""},
    {english: "down", pronunciation: "/daʊn/", type: "adverb/preposition", vietnamese: "xuống", example: "Go down the stairs. (Đi xuống cầu thang.)", image: ""},
    {english: "draw", pronunciation: "/drɔ/", type: "verb", vietnamese: "vẽ", example: "Can you draw a picture? (Bạn có thể vẽ một bức tranh không?)", image: ""},
    {english: "dream", pronunciation: "/drim/", type: "noun/verb", vietnamese: "giấc mơ/mơ", example: "I had a strange dream last night. (Tối qua tôi có một giấc mơ lạ.)", image: ""},
    {english: "dress", pronunciation: "/drɛs/", type: "noun/verb", vietnamese: "váy/mặc quần áo", example: "She wore a beautiful dress. (Cô ấy mặc một chiếc váy đẹp.)", image: ""},
    {english: "drink", pronunciation: "/drɪŋk/", type: "noun/verb", vietnamese: "đồ uống/uống", example: "I need a cold drink. (Tôi cần một đồ uống lạnh.)", image: ""},
    {english: "drive", pronunciation: "/draɪv/", type: "verb", vietnamese: "lái xe", example: "He drives carefully. (Anh ấy lái xe cẩn thận.)", image: ""},
    {english: "drop", pronunciation: "/drɑp/", type: "verb/noun", vietnamese: "rơi/giọt", example: "Don't drop your phone! (Đừng làm rơi điện thoại của bạn!)", image: ""},
    {english: "dry", pronunciation: "/draɪ/", type: "adjective/verb", vietnamese: "khô/làm khô", example: "Hang the clothes to dry. (Treo quần áo cho khô.)", image: ""},
    {english: "duck", pronunciation: "/dʌk/", type: "noun", vietnamese: "con vịt", example: "A duck is swimming in the pond. (Một con vịt đang bơi trong ao.)", image: ""},
    {english: "during", pronunciation: "/ˈdʊrɪŋ/", type: "preposition", vietnamese: "trong suốt", example: "He slept during the movie. (Anh ấy ngủ trong suốt bộ phim.)", image: ""},

    // E (50 từ)
    {english: "each", pronunciation: "/itʃ/", type: "determiner", vietnamese: "mỗi", example: "Each student has a book. (Mỗi học sinh có một cuốn sách.)", image: ""},
    {english: "ear", pronunciation: "/ɪr/", type: "noun", vietnamese: "tai", example: "Listen with your ears. (Hãy lắng nghe bằng tai.)", image: ""},
    {english: "early", pronunciation: "/ˈɜrli/", type: "adjective/adverb", vietnamese: "sớm", example: "I woke up early today. (Hôm nay tôi thức dậy sớm.)", image: ""},
    {english: "earth", pronunciation: "/ɜrθ/", type: "noun", vietnamese: "trái đất", example: "The Earth is round. (Trái đất tròn.)", image: ""},
    {english: "ease", pronunciation: "/iz/", type: "noun/verb", vietnamese: "sự dễ dàng/làm dịu", example: "He found ease in his new job. (Anh ấy tìm thấy sự thoải mái trong công việc mới.)", image: ""},
    {english: "east", pronunciation: "/ist/", type: "noun/adjective/adverb", vietnamese: "hướng đông", example: "The sun rises in the east. (Mặt trời mọc ở phía đông.)", image: ""},
    {english: "eat", pronunciation: "/it/", type: "verb", vietnamese: "ăn", example: "I want to eat pizza. (Tôi muốn ăn pizza.)", image: ""},
    {english: "edge", pronunciation: "/ɛdʒ/", type: "noun", vietnamese: "cạnh", example: "Be careful near the edge. (Hãy cẩn thận gần cạnh.)", image: ""},
    {english: "effect", pronunciation: "/ɪˈfɛkt/", type: "noun", vietnamese: "hiệu quả", example: "The medicine had no effect. (Thuốc không có tác dụng.)", image: ""},
    {english: "egg", pronunciation: "/ɛɡ/", type: "noun", vietnamese: "trứng", example: "I eat an egg for breakfast. (Tôi ăn một quả trứng vào bữa sáng.)", image: ""},
    {english: "eight", pronunciation: "/eɪt/", type: "number", vietnamese: "tám", example: "I have eight apples. (Tôi có tám quả táo.)", image: ""},
    {english: "either", pronunciation: "/ˈaɪðər/", type: "determiner/pronoun", vietnamese: "một trong hai", example: "You can choose either option. (Bạn có thể chọn một trong hai lựa chọn.)", image: ""},
    {english: "electric", pronunciation: "/ɪˈlɛktrɪk/", type: "adjective", vietnamese: "điện", example: "Be careful with electric wires. (Hãy cẩn thận với dây điện.)", image: ""},
    {english: "element", pronunciation: "/ˈɛləmənt/", type: "noun", vietnamese: "nguyên tố", example: "Water is made of hydrogen and oxygen elements. (Nước được tạo thành từ các nguyên tố hydro và oxy.)", image: ""},
    {english: "else", pronunciation: "/ɛls/", type: "adverb", vietnamese: "khác", example: "Is there anything else? (Còn gì nữa không?)"},
    {english: "end", pronunciation: "/ɛnd/", type: "noun/verb", vietnamese: "kết thúc", example: "The movie ends at 10 PM. (Bộ phim kết thúc lúc 10 giờ tối.)", image: ""},
    {english: "enemy", pronunciation: "/ˈɛnəmi/", type: "noun", vietnamese: "kẻ thù", example: "He treated his enemy with respect. (Anh ấy đối xử với kẻ thù của mình một cách tôn trọng.)", image: ""},
    {english: "energy", pronunciation: "/ˈɛnərdʒi/", type: "noun", vietnamese: "năng lượng", example: "Plants get energy from the sun. (Cây cối lấy năng lượng từ mặt trời.)", image: ""},
    {english: "engine", pronunciation: "/ˈɛndʒɪn/", type: "noun", vietnamese: "động cơ", example: "The car's engine is powerful. (Động cơ xe hơi mạnh mẽ.)", image: ""},
    {english: "enough", pronunciation: "/ɪˈnʌf/", type: "determiner/adverb", vietnamese: "đủ", example: "Do you have enough money? (Bạn có đủ tiền không?)", image: ""},
    {english: "enter", pronunciation: "/ˈɛntər/", type: "verb", vietnamese: "vào", example: "Please enter your password. (Xin hãy nhập mật khẩu của bạn.)", image: ""},
    {english: "equal", pronunciation: "/ˈikwəl/", type: "adjective/verb", vietnamese: "bằng", example: "Two plus two equals four. (Hai cộng hai bằng bốn.)", image: ""},
    {english: "equate", pronunciation: "/ɪˈkweɪt/", type: "verb", vietnamese: "đánh đồng", example: "Don't equate money with happiness. (Đừng đánh đồng tiền bạc với hạnh phúc.)", image: ""},
    {english: "especially", pronunciation: "/ɪˈspɛʃəli/", type: "adverb", vietnamese: "đặc biệt là", example: "I like all fruits, especially apples. (Tôi thích tất cả các loại trái cây, đặc biệt là táo.)", image: ""},
    {english: "even", pronunciation: "/ˈivən/", type: "adverb", vietnamese: "thậm chí", example: "Even children can do this. (Thậm chí trẻ em cũng có thể làm điều này.)", image: ""},
    {english: "evening", pronunciation: "/ˈivnɪŋ/", type: "noun", vietnamese: "buổi tối", example: "Good evening! (Chào buổi tối!)", image: ""},
    {english: "event", pronunciation: "/ɪˈvɛnt/", type: "noun", vietnamese: "sự kiện", example: "The concert is a big event. (Buổi hòa nhạc là một sự kiện lớn.)", image: ""},
    {english: "ever", pronunciation: "/ˈɛvər/", type: "adverb", vietnamese: "từng", example: "Have you ever been to Paris? (Bạn đã từng đến Paris chưa?)", image: ""},
    {english: "every", pronunciation: "/ˈɛvri/", type: "determiner", vietnamese: "mỗi", example: "Every day is important. (Mọi ngày đều quan trọng.)", image: ""},
    {english: "exact", pronunciation: "/ɪɡˈzækt/", type: "adjective", vietnamese: "chính xác", example: "What's the exact time? (Mấy giờ chính xác rồi?)"},
    {english: "example", pronunciation: "/ɪɡˈzæmpəl/", type: "noun", vietnamese: "ví dụ", example: "Can you give me an example? (Bạn có thể cho tôi một ví dụ không?)"},
    {english: "except", pronunciation: "/ɪkˈsɛpt/", type: "preposition/conjunction", vietnamese: "ngoại trừ", example: "Everyone is here except him. (Mọi người đều ở đây trừ anh ấy.)", image: ""},
    {english: "excite", pronunciation: "/ɪkˈsaɪt/", type: "verb", vietnamese: "kích thích", example: "The news excited everyone. (Tin tức làm mọi người phấn khích.)", image: ""},
    {english: "exercise", pronunciation: "/ˈɛksərsaɪz/", type: "noun/verb", vietnamese: "bài tập/tập thể dục", example: "Regular exercise is important. (Tập thể dục thường xuyên rất quan trọng.)", image: ""},
    {english: "expect", pronunciation: "/ɪkˈspɛkt/", type: "verb", vietnamese: "mong đợi", example: "I expect him to arrive soon. (Tôi mong anh ấy sẽ đến sớm.)", image: ""},
    {english: "experience", pronunciation: "/ɪkˈspɪriəns/", type: "noun/verb", vietnamese: "kinh nghiệm", example: "She has much experience in teaching. (Cô ấy có nhiều kinh nghiệm giảng dạy.)", image: ""},
    {english: "experiment", pronunciation: "/ɪkˈspɛrəmənt/", type: "noun/verb", vietnamese: "thí nghiệm", example: "They conducted a scientific experiment. (Họ tiến hành một thí nghiệm khoa học.)", image: ""},
    {english: "eye", pronunciation: "/aɪ/", type: "noun", vietnamese: "mắt", example: "She has beautiful eyes. (Cô ấy có đôi mắt đẹp.)", image: ""},

    // F (50 từ)
    {english: "face", pronunciation: "/feɪs/", type: "noun/verb", vietnamese: "mặt/đối mặt", example: "Wash your face. (Rửa mặt của bạn.)", image: ""},
    {english: "fact", pronunciation: "/fækt/", type: "noun", vietnamese: "sự thật", example: "It's a known fact. (Đó là một sự thật đã biết.)", image: ""},
    {english: "fair", pronunciation: "/fɛr/", type: "adjective", vietnamese: "công bằng", example: "Life is not always fair. (Cuộc sống không phải lúc nào cũng công bằng.)", image: ""},
    {english: "fall", pronunciation: "/fɔl/", type: "verb/noun", vietnamese: "rơi/mùa thu", example: "Leaves fall in autumn. (Lá rụng vào mùa thu.)", image: ""},
    {english: "family", pronunciation: "/ˈfæməli/", type: "noun", vietnamese: "gia đình", example: "I love my family. (Tôi yêu gia đình tôi.)", image: ""},
    {english: "famous", pronunciation: "/ˈfeɪməs/", type: "adjective", vietnamese: "nổi tiếng", example: "He is a famous singer. (Anh ấy là một ca sĩ nổi tiếng.)", image: ""},
    {english: "far", pronunciation: "/fɑr/", type: "adverb/adjective", vietnamese: "xa", example: "How far is it? (Nó cách bao xa?)", image: ""},
    {english: "farm", pronunciation: "/fɑrm/", type: "noun", vietnamese: "nông trại", example: "He works on a farm. (Anh ấy làm việc ở nông trại.)", image: ""},
    {english: "fast", pronunciation: "/fæst/", type: "adjective/adverb", vietnamese: "nhanh", example: "He runs very fast. (Anh ấy chạy rất nhanh.)", image: ""},
    {english: "fat", pronunciation: "/fæt/", type: "adjective", vietnamese: "béo", example: "He is a fat cat. (Nó là một con mèo béo.)", image: ""},
    {english: "father", pronunciation: "/ˈfɑðər/", type: "noun", vietnamese: "cha", example: "My father works hard. (Cha tôi làm việc chăm chỉ.)", image: ""},
    {english: "favor", pronunciation: "/ˈfeɪvər/", type: "noun/verb", vietnamese: "ân huệ", example: "Could you do me a favor? (Bạn có thể giúp tôi một ân huệ không?)", image: ""},
    {english: "fear", pronunciation: "/fɪr/", type: "noun/verb", vietnamese: "sợ hãi", example: "He has no fear. (Anh ấy không có nỗi sợ hãi nào.)", image: ""},
    {english: "feed", pronunciation: "/fid/", type: "verb", vietnamese: "cho ăn", example: "Feed the dog. (Cho chó ăn.)", image: ""},
    {english: "feel", pronunciation: "/fil/", type: "verb", vietnamese: "cảm thấy", example: "I feel happy. (Tôi cảm thấy hạnh phúc.)", image: ""},
    {english: "feet", pronunciation: "/fit/", type: "noun", vietnamese: "chân (số nhiều của foot)", example: "My feet are tired. (Chân của tôi mỏi rồi.)", image: ""},
    {english: "fell", pronunciation: "/fɛl/", type: "verb", vietnamese: "đã ngã (quá khứ của fall)", example: "He fell off the bike. (Anh ấy đã ngã khỏi xe đạp.)", image: ""},
    {english: "felt", pronunciation: "/fɛlt/", type: "verb", vietnamese: "đã cảm thấy (quá khứ của feel)", example: "She felt sad. (Cô ấy cảm thấy buồn.)", image: ""},
    {english: "few", pronunciation: "/fju/", type: "determiner/pronoun", vietnamese: "một ít", example: "I have a few books. (Tôi có vài cuốn sách.)", image: ""},
    {english: "field", pronunciation: "/fild/", type: "noun", vietnamese: "cánh đồng", example: "The cows are in the field. (Những con bò đang ở trên cánh đồng.)", image: ""},
    {english: "fig", pronunciation: "/fɪɡ/", type: "noun", vietnamese: "quả sung", example: "Figs are sweet. (Quả sung ngọt.)", image: ""},
    {english: "fight", pronunciation: "/faɪt/", type: "verb/noun", vietnamese: "chiến đấu/cuộc chiến", example: "They fought bravely. (Họ chiến đấu dũng cảm.)", image: ""},
    {english: "figure", pronunciation: "/ˈfɪɡjər/", type: "noun/verb", vietnamese: "hình dáng/nhân vật", example: "He has a tall figure. (Anh ấy có dáng người cao.)", image: ""},
    {english: "fill", pronunciation: "/fɪl/", type: "verb", vietnamese: "làm đầy", example: "Fill the bottle with water. (Làm đầy chai bằng nước.)", image: ""},
    {english: "final", pronunciation: "/ˈfaɪnəl/", type: "adjective", vietnamese: "cuối cùng", example: "This is the final decision. (Đây là quyết định cuối cùng.)", image: ""},
    {english: "find", pronunciation: "/faɪnd/", type: "verb", vietnamese: "tìm thấy", example: "I can't find my keys. (Tôi không thể tìm thấy chìa khóa.)", image: ""},
    {english: "fine", pronunciation: "/faɪn/", type: "adjective", vietnamese: "tốt, khỏe", example: "I'm fine, thank you. (Tôi khỏe, cảm ơn.)", image: ""},
    {english: "finger", pronunciation: "/ˈfɪŋɡər/", type: "noun", vietnamese: "ngón tay", example: "He pointed with his finger. (Anh ấy chỉ bằng ngón tay.)", image: ""},
    {english: "finish", pronunciation: "/ˈfɪnɪʃ/", type: "verb", vietnamese: "hoàn thành", example: "Finish your homework. (Hoàn thành bài tập về nhà.)", image: ""},
    {english: "fire", pronunciation: "/ˈfaɪər/", type: "noun/verb", vietnamese: "lửa/đốt cháy", example: "The fire is burning. (Ngọn lửa đang cháy.)", image: ""},
    {english: "first", pronunciation: "/fɜrst/", type: "adjective/adverb", vietnamese: "đầu tiên", example: "This is my first time here. (Đây là lần đầu tiên tôi đến đây.)", image: ""},
    {english: "fish", pronunciation: "/fɪʃ/", type: "noun/verb", vietnamese: "cá/câu cá", example: "I like to eat fish. (Tôi thích ăn cá.)", image: ""},
    {english: "fit", pronunciation: "/fɪt/", type: "verb/adjective", vietnamese: "vừa vặn/phù hợp", example: "This dress doesn't fit me. (Chiếc váy này không vừa với tôi.)", image: ""},
    {english: "five", pronunciation: "/faɪv/", type: "number", vietnamese: "năm", example: "I have five fingers. (Tôi có năm ngón tay.)", image: ""},
    {english: "flat", pronunciation: "/flæt/", type: "adjective", vietnamese: "bằng phẳng", example: "The road is flat. (Con đường bằng phẳng.)", image: ""},
    {english: "floor", pronunciation: "/flɔr/", type: "noun", vietnamese: "sàn nhà/tầng", example: "The book fell on the floor. (Cuốn sách rơi xuống sàn.)", image: ""},
    {english: "flow", pronunciation: "/floʊ/", type: "verb/noun", vietnamese: "chảy/dòng chảy", example: "The river flows to the sea. (Con sông chảy ra biển.)", image: ""},
    {english: "flower", pronunciation: "/ˈflaʊər/", type: "noun", vietnamese: "hoa", example: "She picked a beautiful flower. (Cô ấy hái một bông hoa đẹp.)", image: ""},
    {english: "fly", pronunciation: "/flaɪ/", type: "verb/noun", vietnamese: "bay/con ruồi", example: "Birds can fly. (Chim có thể bay.)", image: ""},
    {english: "follow", pronunciation: "/ˈfɑloʊ/", type: "verb", vietnamese: "theo dõi", example: "Follow me. (Hãy đi theo tôi.)", image: ""},
    {english: "food", pronunciation: "/fud/", type: "noun", vietnamese: "thức ăn", example: "I need some food. (Tôi cần một ít thức ăn.)", image: ""},
    {english: "foot", pronunciation: "/fʊt/", type: "noun", vietnamese: "chân", example: "My foot hurts. (Chân tôi bị đau.)", image: ""},
    {english: "for", pronunciation: "/fɔr/", type: "preposition", vietnamese: "cho", example: "This gift is for you. (Món quà này dành cho bạn.)", image: ""},
    {english: "force", pronunciation: "/fɔrs/", type: "noun/verb", vietnamese: "lực/ép buộc", example: "He used force to open the door. (Anh ấy dùng sức để mở cửa.)", image: ""},
    {english: "forest", pronunciation: "/ˈfɔrɪst/", type: "noun", vietnamese: "rừng", example: "Animals live in the forest. (Động vật sống trong rừng.)", image: ""},
    {english: "form", pronunciation: "/fɔrm/", type: "noun/verb", vietnamese: "dạng/tạo thành", example: "Please fill out the form. (Xin hãy điền vào mẫu đơn.)", image: ""},
    {english: "forward", pronunciation: "/ˈfɔrwərd/", type: "adverb", vietnamese: "về phía trước", example: "Move forward. (Tiến về phía trước.)", image: ""},
    {english: "found", pronunciation: "/faʊnd/", type: "verb", vietnamese: "đã tìm thấy (quá khứ của find)", example: "I found my keys. (Tôi đã tìm thấy chìa khóa.)", image: ""},
    {english: "four", pronunciation: "/fɔr/", type: "number", vietnamese: "bốn", example: "There are four seasons in a year. (Có bốn mùa trong một năm.)", image: ""},
    {english: "fraction", pronunciation: "/ˈfrækʃən/", type: "noun", vietnamese: "phân số", example: "1/2 is a fraction. (1/2 là một phân số.)", image: ""},
    {english: "free", pronunciation: "/fri/", type: "adjective/verb", vietnamese: "tự do/miễn phí", example: "This sample is free. (Mẫu này miễn phí.)", image: ""},
    {english: "fresh", pronunciation: "/frɛʃ/", type: "adjective", vietnamese: "tươi", example: "I like fresh fruit. (Tôi thích trái cây tươi.)", image: ""},
    {english: "friend", pronunciation: "/frɛnd/", type: "noun", vietnamese: "bạn bè", example: "He is my best friend. (Anh ấy là bạn thân nhất của tôi.)", image: ""},
    {english: "from", pronunciation: "/frʌm/", type: "preposition", vietnamese: "từ", example: "I'm from Vietnam. (Tôi đến từ Việt Nam.)", image: ""},
    {english: "front", pronunciation: "/frʌnt/", type: "noun/adjective", vietnamese: "phía trước", example: "The car is in front of the house. (Xe hơi ở phía trước ngôi nhà.)", image: ""},
    {english: "fruit", pronunciation: "/frut/", type: "noun", vietnamese: "hoa quả", example: "Apples are a type of fruit. (Táo là một loại hoa quả.)", image: ""},
    {english: "full", pronunciation: "/fʊl/", type: "adjective", vietnamese: "đầy", example: "The glass is full of water. (Cốc đầy nước.)", image: ""},
    {english: "fun", pronunciation: "/fʌn/", type: "noun/adjective", vietnamese: "niềm vui/vui vẻ", example: "We had a lot of fun. (Chúng tôi đã có rất nhiều niềm vui.)", image: ""},

    // G (50 từ)
    {english: "game", pronunciation: "/ɡeɪm/", type: "noun", vietnamese: "trò chơi", example: "Let's play a game. (Hãy chơi một trò chơi.)", image: ""},
    {english: "garden", pronunciation: "/ˈɡɑrdən/", type: "noun", vietnamese: "khu vườn", example: "She grows flowers in her garden. (Cô ấy trồng hoa trong vườn.)", image: ""},
    {english: "gas", pronunciation: "/ɡæs/", type: "noun", vietnamese: "khí ga", example: "Turn off the gas. (Tắt ga đi.)", image: ""},
    {english: "gather", pronunciation: "/ˈɡæðər/", type: "verb", vietnamese: "tập hợp", example: "We gathered around the campfire. (Chúng tôi tụ tập quanh đống lửa trại.)", image: ""},
    {english: "gave", pronunciation: "/ɡeɪv/", type: "verb", vietnamese: "đã cho (quá khứ của give)", example: "He gave me a gift. (Anh ấy đã tặng tôi một món quà.)", image: ""},
    {english: "general", pronunciation: "/ˈdʒɛnərəl/", type: "adjective/noun", vietnamese: "chung/tổng quát", example: "In general, I agree. (Nói chung, tôi đồng ý.)", image: ""},
    {english: "gentle", pronunciation: "/ˈdʒɛntl/", type: "adjective", vietnamese: "hiền lành", example: "He has a gentle nature. (Anh ấy có bản tính hiền lành.)", image: ""},
    {english: "get", pronunciation: "/ɡɛt/", type: "verb", vietnamese: "lấy, nhận", example: "Can you get me some water? (Bạn có thể lấy cho tôi chút nước không?)", image: ""},
    {english: "girl", pronunciation: "/ɡɜrl/", type: "noun", vietnamese: "cô gái", example: "The girl is reading. (Cô gái đang đọc sách.)", image: ""},
    {english: "give", pronunciation: "/ɡɪv/", type: "verb", vietnamese: "cho", example: "Give me your hand. (Đưa tay cho tôi.)", image: ""},
    {english: "glad", pronunciation: "/ɡlæd/", type: "adjective", vietnamese: "vui mừng", example: "I'm glad to see you. (Tôi vui mừng khi gặp bạn.)", image: ""},
    {english: "glass", pronunciation: "/ɡlæs/", type: "noun", vietnamese: "kính/cốc", example: "The window is made of glass. (Cửa sổ làm bằng kính.)", image: ""},
    {english: "go", pronunciation: "/ɡoʊ/", type: "verb", vietnamese: "đi", example: "Let's go to the park. (Chúng ta hãy đi công viên.)", image: ""},
    {english: "gold", pronunciation: "/ɡoʊld/", type: "noun/adjective", vietnamese: "vàng/bằng vàng", example: "She wears a gold ring. (Cô ấy đeo nhẫn vàng.)", image: ""},
    {english: "gone", pronunciation: "/ɡɔn/", type: "verb", vietnamese: "đã đi (quá khứ phân từ của go)", example: "He has gone home. (Anh ấy đã về nhà.)", image: ""},
    {english: "good", pronunciation: "/ɡʊd/", type: "adjective", vietnamese: "tốt", example: "You did a good job. (Bạn đã làm tốt.)", image: ""},
    {english: "got", pronunciation: "/ɡɑt/", type: "verb", vietnamese: "đã có (quá khứ của get)", example: "I got your message. (Tôi đã nhận được tin nhắn của bạn.)", image: ""},
    {english: "govern", pronunciation: "/ˈɡʌvərn/", type: "verb", vietnamese: "cai trị", example: "The government governs the country. (Chính phủ cai trị đất nước.)", image: ""},
    {english: "grand", pronunciation: "/ɡrænd/", type: "adjective", vietnamese: "to lớn/tráng lệ", example: "The palace is very grand. (Cung điện rất tráng lệ.)", image: ""},
    {english: "grass", pronunciation: "/ɡræs/", type: "noun", vietnamese: "cỏ", example: "The grass is green. (Cỏ có màu xanh.)", image: ""},
    {english: "gray", pronunciation: "/ɡreɪ/", type: "adjective", vietnamese: "màu xám", example: "The sky is gray today. (Bầu trời hôm nay màu xám.)", image: ""},
    {english: "great", pronunciation: "/ɡreɪt/", type: "adjective", vietnamese: "tuyệt vời", example: "That's a great idea! (Đó là một ý tưởng tuyệt vời!)", image: ""},
    {english: "green", pronunciation: "/ɡrin/", type: "adjective", vietnamese: "màu xanh lá", example: "The leaves are green. (Những chiếc lá màu xanh.)", image: ""},
    {english: "grew", pronunciation: "/ɡru/", type: "verb", vietnamese: "đã mọc/lớn lên (quá khứ của grow)", example: "The tree grew tall. (Cái cây lớn lên cao.)", image: ""},
    {english: "ground", pronunciation: "/ɡraʊnd/", type: "noun", vietnamese: "mặt đất", example: "The ball hit the ground. (Quả bóng chạm đất.)", image: ""},
    {english: "group", pronunciation: "/ɡrup/", type: "noun", vietnamese: "nhóm", example: "We work in a group. (Chúng tôi làm việc theo nhóm.)", image: ""},
    {english: "grow", pronunciation: "/ɡroʊ/", type: "verb", vietnamese: "lớn lên/trồng", example: "Children grow quickly. (Trẻ em lớn nhanh.)", image: ""},
    {english: "guess", pronunciation: "/ɡɛs/", type: "verb/noun", vietnamese: "đoán", example: "Can you guess the answer? (Bạn có thể đoán câu trả lời không?)", image: ""},
    {english: "guide", pronunciation: "/ɡaɪd/", type: "noun/verb", vietnamese: "người hướng dẫn/hướng dẫn", example: "He works as a tour guide. (Anh ấy làm hướng dẫn viên du lịch.)", image: ""},
    {english: "gun", pronunciation: "/ɡʌn/", type: "noun", vietnamese: "súng", example: "The soldier carried a gun. (Người lính mang một khẩu súng.)", image: ""},

    // H (50 từ)
    {english: "had", pronunciation: "/hæd/", type: "verb", vietnamese: "đã có (quá khứ của have)", example: "I had a dream. (Tôi đã có một giấc mơ.)", image: ""},
    {english: "hair", pronunciation: "/hɛr/", type: "noun", vietnamese: "tóc", example: "She has long hair. (Cô ấy có mái tóc dài.)", image: ""},
    {english: "half", pronunciation: "/hæf/", type: "noun/determiner", vietnamese: "một nửa", example: "I'll take half of it. (Tôi sẽ lấy một nửa.)", image: ""},
    {english: "hand", pronunciation: "/hænd/", type: "noun/verb", vietnamese: "tay/trao", example: "Shake my hand. (Bắt tay tôi.)", image: ""},
    {english: "happen", pronunciation: "/ˈhæpən/", type: "verb", vietnamese: "xảy ra", example: "What happened? (Chuyện gì đã xảy ra?)"},
    {english: "happy", pronunciation: "/ˈhæpi/", type: "adjective", vietnamese: "hạnh phúc", example: "I'm happy to see you. (Tôi hạnh phúc khi gặp bạn.)", image: ""},
    {english: "hard", pronunciation: "/hɑrd/", type: "adjective/adverb", vietnamese: "khó/chăm chỉ", example: "He works very hard. (Anh ấy làm việc rất chăm chỉ.)", image: ""},
    {english: "has", pronunciation: "/hæz/", type: "verb", vietnamese: "có (dạng của have)", example: "She has a dog. (Cô ấy có một con chó.)", image: ""},
    {english: "hat", pronunciation: "/hæt/", type: "noun", vietnamese: "mũ", example: "He wears a hat. (Anh ấy đội mũ.)", image: ""},
    {english: "have", pronunciation: "/hæv/", type: "verb", vietnamese: "có", example: "I have a cat. (Tôi có một con mèo.)", image: ""},
    {english: "he", pronunciation: "/hi/", type: "pronoun", vietnamese: "anh ấy", example: "He is my brother. (Anh ấy là anh trai tôi.)", image: ""},
    {english: "head", pronunciation: "/hɛd/", type: "noun/verb", vietnamese: "đầu/chỉ huy", example: "My head hurts. (Đầu tôi bị đau.)", image: ""},
    {english: "hear", pronunciation: "/hɪr/", type: "verb", vietnamese: "nghe", example: "Can you hear me? (Bạn có nghe tôi không?)", image: ""},
    {english: "heard", pronunciation: "/hɜrd/", type: "verb", vietnamese: "đã nghe (quá khứ của hear)", example: "I heard the news. (Tôi đã nghe tin tức.)", image: ""},
    {english: "heart", pronunciation: "/hɑrt/", type: "noun", vietnamese: "tim", example: "Your heart beats constantly. (Tim bạn đập liên tục.)", image: ""},
    {english: "heat", pronunciation: "/hit/", type: "noun/verb", vietnamese: "nhiệt/làm nóng", example: "The sun gives off heat. (Mặt trời tỏa nhiệt.)", image: ""},
    {english: "heavy", pronunciation: "/ˈhɛvi/", type: "adjective", vietnamese: "nặng", example: "This box is very heavy. (Cái hộp này rất nặng.)", image: ""},
    {english: "held", pronunciation: "/hɛld/", type: "verb", vietnamese: "đã giữ (quá khứ của hold)", example: "He held her hand. (Anh ấy đã nắm tay cô ấy.)", image: ""},
    {english: "help", pronunciation: "/hɛlp/", type: "verb/noun", vietnamese: "giúp đỡ", example: "Can I help you? (Tôi có thể giúp gì cho bạn?)"},
    {english: "her", pronunciation: "/hɜr/", type: "pronoun/determiner", vietnamese: "cô ấy/của cô ấy", example: "I saw her yesterday. (Tôi đã gặp cô ấy hôm qua.)", image: ""},
    {english: "here", pronunciation: "/hɪr/", type: "adverb", vietnamese: "ở đây", example: "Come here! (Đến đây!)", image: ""},
    {english: "high", pronunciation: "/haɪ/", type: "adjective/adverb", vietnamese: "cao", example: "The bird flew high. (Con chim bay cao.)", image: ""},
    {english: "hill", pronunciation: "/hɪl/", type: "noun", vietnamese: "đồi", example: "We climbed the hill. (Chúng tôi leo đồi.)", image: ""},
    {english: "him", pronunciation: "/hɪm/", type: "pronoun", vietnamese: "anh ấy (tân ngữ)", example: "I gave it to him. (Tôi đã đưa nó cho anh ấy.)", image: ""},
    {english: "his", pronunciation: "/hɪz/", type: "determiner/pronoun", vietnamese: "của anh ấy", example: "This is his book. (Đây là sách của anh ấy.)", image: ""},
    {english: "history", pronunciation: "/ˈhɪstəri/", type: "noun", vietnamese: "lịch sử", example: "I love reading history books. (Tôi thích đọc sách lịch sử.)", image: ""},
    {english: "hit", pronunciation: "/hɪt/", type: "verb/noun", vietnamese: "đánh/cú đánh", example: "He hit the ball. (Anh ấy đánh bóng.)", image: ""},
    {english: "hold", pronunciation: "/hoʊld/", type: "verb/noun", vietnamese: "giữ", example: "Hold my hand. (Nắm tay tôi.)", image: ""},
    {english: "hole", pronunciation: "/hoʊl/", type: "noun", vietnamese: "lỗ", example: "There's a hole in my sock. (Có một lỗ trên tất của tôi.)", image: ""},
    {english: "home", pronunciation: "/hoʊm/", type: "noun/adverb", vietnamese: "nhà/về nhà", example: "I'm going home. (Tôi đang về nhà.)", image: ""},
    {english: "hope", pronunciation: "/hoʊp/", type: "verb/noun", vietnamese: "hy vọng", example: "I hope you feel better. (Tôi hy vọng bạn sẽ khỏe hơn.)", image: ""},
    {english: "horse", pronunciation: "/hɔrs/", type: "noun", vietnamese: "ngựa", example: "He rides a horse. (Anh ấy cưỡi ngựa.)", image: ""},
    {english: "hot", pronunciation: "/hɑt/", type: "adjective", vietnamese: "nóng", example: "The coffee is hot. (Cà phê nóng.)", image: ""},
    {english: "hour", pronunciation: "/ˈaʊər/", type: "noun", vietnamese: "giờ", example: "The meeting lasted an hour. (Cuộc họp kéo dài một giờ.)", image: ""},
    {english: "house", pronunciation: "/haʊs/", type: "noun", vietnamese: "ngôi nhà", example: "My house is big. (Nhà tôi lớn.)", image: ""},
    {english: "how", pronunciation: "/haʊ/", type: "adverb", vietnamese: "như thế nào", example: "How are you? (Bạn thế nào?)"},
    {english: "huge", pronunciation: "/hjudʒ/", type: "adjective", vietnamese: "khổng lồ", example: "That's a huge tree. (Đó là một cái cây khổng lồ.)", image: ""},
    {english: "human", pronunciation: "/ˈhjumən/", type: "adjective/noun", vietnamese: "con người", example: "Human beings are complex. (Loài người rất phức tạp.)", image: ""},
    {english: "hundred", pronunciation: "/ˈhʌndrəd/", type: "number", vietnamese: "trăm", example: "One hundred dollars. (Một trăm đô la.)", image: ""},
    {english: "hunt", pronunciation: "/hʌnt/", type: "verb", vietnamese: "săn bắn", example: "They hunt for food. (Họ săn bắt để kiếm thức ăn.)", image: ""},
    {english: "hurry", pronunciation: "/ˈhɜri/", type: "verb/noun", vietnamese: "vội vàng", example: "Don't hurry. (Đừng vội.)", image: ""},

    // I (50 từ)
    {english: "I", pronunciation: "/aɪ/", type: "pronoun", vietnamese: "tôi", example: "I am a student. (Tôi là học sinh.)", image: ""},
    {english: "ice", pronunciation: "/aɪs/", type: "noun", vietnamese: "băng", example: "The lake is covered with ice. (Hồ được bao phủ bởi băng.)", image: ""},
    {english: "idea", pronunciation: "/aɪˈdiə/", type: "noun", vietnamese: "ý tưởng", example: "That's a good idea! (Đó là một ý tưởng hay!)", image: ""},
    {english: "if", pronunciation: "/ɪf/", type: "conjunction", vietnamese: "nếu", example: "If it rains, we'll stay home. (Nếu trời mưa, chúng ta sẽ ở nhà.)", image: ""},
    {english: "imagine", pronunciation: "/ɪˈmædʒɪn/", type: "verb", vietnamese: "tưởng tượng", example: "Imagine a world without problems. (Hãy tưởng tượng một thế giới không có vấn đề.)", image: ""},
    {english: "in", pronunciation: "/ɪn/", type: "preposition", vietnamese: "trong", example: "The book is in the bag. (Cuốn sách ở trong túi.)", image: ""},
    {english: "inch", pronunciation: "/ɪntʃ/", type: "noun", vietnamese: "inch (đơn vị đo)", example: "The ruler is 12 inches long. (Thước dài 12 inch.)", image: ""},
    {english: "include", pronunciation: "/ɪnˈklud/", type: "verb", vietnamese: "bao gồm", example: "The price includes tax. (Giá bao gồm thuế.)", image: ""},
    {english: "indicate", pronunciation: "/ˈɪndɪkeɪt/", type: "verb", vietnamese: "chỉ ra", example: "The arrow indicates direction. (Mũi tên chỉ hướng.)", image: ""},
    {english: "industry", pronunciation: "/ˈɪndəstri/", type: "noun", vietnamese: "ngành công nghiệp", example: "The automotive industry is large. (Ngành công nghiệp ô tô rất lớn.)", image: ""},
    {english: "insect", pronunciation: "/ˈɪnsɛkt/", type: "noun", vietnamese: "côn trùng", example: "A butterfly is an insect. (Con bướm là một loài côn trùng.)", image: ""},
    {english: "instant", pronunciation: "/ˈɪnstənt/", type: "adjective", vietnamese: "ngay lập tức", example: "I need an instant answer. (Tôi cần một câu trả lời ngay lập tức.)", image: ""},
    {english: "instrument", pronunciation: "/ˈɪnstrəmənt/", type: "noun", vietnamese: "nhạc cụ/dụng cụ", example: "A piano is a musical instrument. (Đàn piano là một nhạc cụ.)", image: ""},
    {english: "interest", pronunciation: "/ˈɪntrɪst/", type: "noun/verb", vietnamese: "sự quan tâm/làm quan tâm", example: "He has a great interest in history. (Anh ấy có niềm quan tâm lớn đến lịch sử.)", image: ""},
    {english: "invent", pronunciation: "/ɪnˈvɛnt/", type: "verb", vietnamese: "phát minh", example: "Who invented the light bulb? (Ai đã phát minh ra bóng đèn?)"},
    {english: "iron", pronunciation: "/ˈaɪərn/", type: "noun/verb", vietnamese: "sắt/ủi", example: "Iron is a strong metal. (Sắt là một kim loại chắc chắn.)", image: ""},
    {english: "is", pronunciation: "/ɪz/", type: "verb", vietnamese: "là", example: "She is beautiful. (Cô ấy đẹp.)", image: ""},
    {english: "island", pronunciation: "/ˈaɪlənd/", type: "noun", vietnamese: "hòn đảo", example: "Hawaii is an island. (Hawaii là một hòn đảo.)", image: ""},
    {english: "it", pronunciation: "/ɪt/", type: "pronoun", vietnamese: "nó", example: "It is raining. (Trời đang mưa.)", image: ""},

    // J (10 từ)
    {english: "job", pronunciation: "/dʒɑb/", type: "noun", vietnamese: "công việc", example: "He is looking for a new job. (Anh ấy đang tìm kiếm một công việc mới.)", image: ""},
    {english: "join", pronunciation: "/dʒɔɪn/", type: "verb", vietnamese: "tham gia", example: "Would you like to join us? (Bạn có muốn tham gia cùng chúng tôi không?)", image: ""},
    {english: "joy", pronunciation: "/dʒɔɪ/", type: "noun", vietnamese: "niềm vui", example: "His music brings joy to many. (Âm nhạc của anh ấy mang lại niềm vui cho nhiều người.)", image: ""},
    {english: "jump", pronunciation: "/dʒʌmp/", type: "verb/noun", vietnamese: "nhảy", example: "He can jump very high. (Anh ấy có thể nhảy rất cao.)", image: ""},
    {english: "just", pronunciation: "/dʒʌst/", type: "adverb", vietnamese: "chỉ/vừa mới", example: "I just finished my work. (Tôi vừa mới hoàn thành công việc.)", image: ""},

    // K (10 từ)
    {english: "keep", pronunciation: "/kip/", type: "verb", vietnamese: "giữ", example: "Keep quiet. (Giữ im lặng.)", image: ""},
    {english: "kept", pronunciation: "/kɛpt/", type: "verb", vietnamese: "đã giữ (quá khứ của keep)", example: "She kept her promise. (Cô ấy đã giữ lời hứa của mình.)", image: ""},
    {english: "key", pronunciation: "/ki/", type: "noun", vietnamese: "chìa khóa", example: "Where is my key? (Chìa khóa của tôi đâu rồi?)", image: ""},
    {english: "kill", pronunciation: "/kɪl/", type: "verb", vietnamese: "giết", example: "Don't kill the insect. (Đừng giết côn trùng.)", image: ""},
    {english: "kind", pronunciation: "/kaɪnd/", type: "noun/adjective", vietnamese: "loại/tử tế", example: "What kind of music do you like? (Bạn thích loại nhạc nào?)", image: ""},
    {english: "king", pronunciation: "/kɪŋ/", type: "noun", vietnamese: "vua", example: "The king rules the kingdom. (Vua cai trị vương quốc.)", image: ""},
    {english: "knew", pronunciation: "/nu/", type: "verb", vietnamese: "đã biết (quá khứ của know)", example: "I knew the answer. (Tôi đã biết câu trả lời.)", image: ""},
    {english: "know", pronunciation: "/noʊ/", type: "verb", vietnamese: "biết", example: "Do you know him? (Bạn có biết anh ấy không?)", image: ""},

    // L (50 từ)
    {english: "lady", pronunciation: "/ˈleɪdi/", type: "noun", vietnamese: "quý bà", example: "The lady is wearing a red dress. (Quý bà đang mặc một chiếc váy đỏ.)", image: ""},
    {english: "lake", pronunciation: "/leɪk/", type: "noun", vietnamese: "hồ", example: "We went boating on the lake. (Chúng tôi đi thuyền trên hồ.)", image: ""},
    {english: "land", pronunciation: "/lænd/", type: "noun/verb", vietnamese: "đất/hạ cánh", example: "The plane landed safely. (Máy bay đã hạ cánh an toàn.)", image: ""},
    {english: "language", pronunciation: "/ˈlæŋɡwɪdʒ/", type: "noun", vietnamese: "ngôn ngữ", example: "English is a global language. (Tiếng Anh là một ngôn ngữ toàn cầu.)", image: ""},
    {english: "large", pronunciation: "/lɑrdʒ/", type: "adjective", vietnamese: "lớn", example: "They live in a large house. (Họ sống trong một ngôi nhà lớn.)", image: ""},
    {english: "last", pronunciation: "/læst/", type: "adjective/adverb", vietnamese: "cuối cùng/gần đây nhất", example: "This is my last chance. (Đây là cơ hội cuối cùng của tôi.)", image: ""},
    {english: "late", pronunciation: "/leɪt/", type: "adjective/adverb", vietnamese: "muộn", example: "I was late for work. (Tôi đã đến trễ làm.)", image: ""},
    {english: "laugh", pronunciation: "/læf/", type: "verb/noun", vietnamese: "cười", example: "She has a beautiful laugh. (Cô ấy có nụ cười đẹp.)", image: ""},
    {english: "law", pronunciation: "/lɔ/", type: "noun", vietnamese: "luật pháp", example: "Respect the law. (Hãy tôn trọng pháp luật.)", image: ""},
    {english: "lay", pronunciation: "/leɪ/", type: "verb", vietnamese: "đặt, để", example: "Lay the book on the table. (Đặt cuốn sách lên bàn.)", image: ""},
    {english: "lead", pronunciation: "/lid/", type: "verb", vietnamese: "lãnh đạo/dẫn dắt", example: "Who will lead the team? (Ai sẽ lãnh đạo đội?)"},
    {english: "learn", pronunciation: "/lɜrn/", type: "verb", vietnamese: "học", example: "I want to learn English. (Tôi muốn học tiếng Anh.)", image: ""},
    {english: "least", pronunciation: "/list/", type: "determiner/pronoun", vietnamese: "ít nhất", example: "It's the least I can do. (Đó là điều ít nhất tôi có thể làm.)", image: ""},
    {english: "leave", pronunciation: "/liv/", type: "verb", vietnamese: "rời đi/để lại", example: "Don't leave your bag here. (Đừng để túi của bạn ở đây.)", image: ""},
    {english: "led", pronunciation: "/lɛd/", type: "verb", vietnamese: "đã lãnh đạo/dẫn dắt (quá khứ của lead)", example: "He led the team to victory. (Anh ấy đã dẫn dắt đội đến chiến thắng.)", image: ""},
    {english: "left", pronunciation: "/lɛft/", type: "adjective/adverb/noun", vietnamese: "trái/còn lại", example: "Turn left at the corner. (Rẽ trái ở góc.)", image: ""},
    {english: "leg", pronunciation: "/lɛɡ/", type: "noun", vietnamese: "chân", example: "He broke his leg. (Anh ấy bị gãy chân.)", image: ""},
    {english: "length", pronunciation: "/lɛŋθ/", type: "noun", vietnamese: "chiều dài", example: "What's the length of the table? (Chiều dài của cái bàn là bao nhiêu?)", image: ""},
    {english: "less", pronunciation: "/lɛs/", type: "determiner/pronoun", vietnamese: "ít hơn", example: "I have less money than you. (Tôi có ít tiền hơn bạn.)", image: ""},
    {english: "let", pronunciation: "/lɛt/", type: "verb", vietnamese: "cho phép", example: "Let me help you. (Để tôi giúp bạn.)", image: ""},
    {english: "letter", pronunciation: "/ˈlɛtər/", type: "noun", vietnamese: "lá thư/chữ cái", example: "I wrote a letter to my friend. (Tôi đã viết một lá thư cho bạn tôi.)", image: ""},
    {english: "level", pronunciation: "/ˈlɛvəl/", type: "noun/adjective", vietnamese: "cấp độ/bằng phẳng", example: "What's your English level? (Trình độ tiếng Anh của bạn là gì?)"},
    {english: "lie", pronunciation: "/laɪ/", type: "verb/noun", vietnamese: "nằm/nói dối", example: "Don't lie to me. (Đừng nói dối tôi.)", image: ""},
    {english: "life", pronunciation: "/laɪf/", type: "noun", vietnamese: "cuộc sống", example: "Life is beautiful. (Cuộc sống tươi đẹp.)", image: ""},
    {english: "lift", pronunciation: "/lɪft/", type: "verb/noun", vietnamese: "nâng/thang máy", example: "Can you lift this box? (Bạn có thể nâng cái hộp này không?)", image: ""},
    {english: "light", pronunciation: "/laɪt/", type: "noun/adjective", vietnamese: "ánh sáng/nhẹ", example: "Turn on the light. (Bật đèn lên.)", image: ""},
    {english: "like", pronunciation: "/laɪk/", type: "verb/preposition", vietnamese: "thích/giống như", example: "I like coffee. (Tôi thích cà phê.)", image: ""},
    {english: "line", pronunciation: "/laɪn/", type: "noun", vietnamese: "đường", example: "Draw a straight line. (Vẽ một đường thẳng.)", image: ""},
    {english: "liquid", pronunciation: "/ˈlɪkwɪd/", type: "noun/adjective", vietnamese: "chất lỏng", example: "Water is a liquid. (Nước là một chất lỏng.)", image: ""},
    {english: "list", pronunciation: "/lɪst/", type: "noun/verb", vietnamese: "danh sách", example: "Make a shopping list. (Lập danh sách mua sắm.)", image: ""},
    {english: "listen", pronunciation: "/ˈlɪsən/", type: "verb", vietnamese: "nghe", example: "Listen to the music. (Nghe nhạc.)", image: ""},
    {english: "little", pronunciation: "/ˈlɪtl/", type: "adjective/adverb", vietnamese: "nhỏ/ít", example: "I have a little money. (Tôi có một ít tiền.)", image: ""},
    {english: "live", pronunciation: "/lɪv/", type: "verb", vietnamese: "sống", example: "I live in Hanoi. (Tôi sống ở Hà Nội.)", image: ""},
    {english: "locate", pronunciation: "/ˈloʊkeɪt/", type: "verb", vietnamese: "xác định vị trí", example: "Can you locate my phone? (Bạn có thể xác định vị trí điện thoại của tôi không?)", image: ""},
    {english: "log", pronunciation: "/lɔɡ/", type: "noun", vietnamese: "khúc gỗ", example: "The fire burned the log. (Lửa đốt cháy khúc gỗ.)", image: ""},
    {english: "lone", pronunciation: "/loʊn/", type: "adjective", vietnamese: "cô đơn/đơn độc", example: "He feels lone sometimes. (Đôi khi anh ấy cảm thấy cô đơn.)", image: ""},
    {english: "long", pronunciation: "/lɔŋ/", type: "adjective/adverb", vietnamese: "dài/lâu", example: "The river is very long. (Con sông rất dài.)", image: ""},
    {english: "look", pronunciation: "/lʊk/", type: "verb/noun", vietnamese: "nhìn", example: "Look at that bird! (Nhìn con chim kia kìa!)", image: ""},
    {english: "lost", pronunciation: "/lɔst/", type: "adjective", vietnamese: "mất/thua", example: "I lost my keys. (Tôi bị mất chìa khóa.)", image: ""},
    {english: "lot", pronunciation: "/lɑt/", type: "noun", vietnamese: "nhiều", example: "I have a lot of friends. (Tôi có nhiều bạn bè.)", image: ""},
    {english: "loud", pronunciation: "/laʊd/", type: "adjective/adverb", vietnamese: "to, ồn ào", example: "The music is too loud. (Nhạc quá to.)", image: ""},
    {english: "love", pronunciation: "/lʌv/", type: "noun/verb", vietnamese: "tình yêu/yêu", example: "I love my family. (Tôi yêu gia đình tôi.)", image: ""},
    {english: "low", pronunciation: "/loʊ/", type: "adjective/adverb", vietnamese: "thấp", example: "The sun is low in the sky. (Mặt trời thấp trên bầu trời.)", image: ""},

    // M (50 từ)
    {english: "machine", pronunciation: "/məˈʃin/", type: "noun", vietnamese: "máy móc", example: "This machine is very old. (Cái máy này rất cũ.)", image: ""},
    {english: "made", pronunciation: "/meɪd/", type: "verb", vietnamese: "đã làm (quá khứ của make)", example: "This shirt is made of cotton. (Chiếc áo này làm bằng bông.)", image: ""},
    {english: "magnet", pronunciation: "/ˈmæɡnɪt/", type: "noun", vietnamese: "nam châm", example: "A magnet attracts metal. (Nam châm hút kim loại.)", image: ""},
    {english: "main", pronunciation: "/meɪn/", type: "adjective", vietnamese: "chính", example: "What's the main idea? (Ý chính là gì?)", image: ""},
    {english: "major", pronunciation: "/ˈmeɪdʒər/", type: "adjective", vietnamese: "chính/chủ yếu", example: "He has a major role in the project. (Anh ấy có vai trò chính trong dự án.)", image: ""},
    {english: "make", pronunciation: "/meɪk/", type: "verb", vietnamese: "làm, chế tạo", example: "Can you make a cake? (Bạn có thể làm một cái bánh không?)", image: ""},
    {english: "man", pronunciation: "/mæn/", type: "noun", vietnamese: "người đàn ông", example: "The man is tall. (Người đàn ông cao.)", image: ""},
    {english: "many", pronunciation: "/ˈmɛni/", type: "determiner/pronoun", vietnamese: "nhiều", example: "I have many books. (Tôi có nhiều sách.)", image: ""},
    {english: "map", pronunciation: "/mæp/", type: "noun", vietnamese: "bản đồ", example: "Look at the map to find the way. (Hãy nhìn vào bản đồ để tìm đường.)", image: ""},
    {english: "mark", pronunciation: "/mɑrk/", type: "noun/verb", vietnamese: "dấu/đánh dấu", example: "Make a mark here. (Đánh dấu ở đây.)", image: ""},
    {english: "market", pronunciation: "/ˈmɑrkɪt/", type: "noun", vietnamese: "chợ/thị trường", example: "I'm going to the market. (Tôi đang đi chợ.)", image: ""},
    {english: "mass", pronunciation: "/mæs/", type: "noun/adjective", vietnamese: "khối lượng/khối", example: "The Earth has a large mass. (Trái đất có khối lượng lớn.)", image: ""},
    {english: "master", pronunciation: "/ˈmæstər/", type: "noun", vietnamese: "chủ/thạc sĩ", example: "He is a master of martial arts. (Anh ấy là bậc thầy võ thuật.)", image: ""},
    {english: "match", pronunciation: "/mætʃ/", type: "noun/verb", vietnamese: "trận đấu/phù hợp", example: "The shoes match the bag. (Đôi giày hợp với túi.)", image: ""},
    {english: "material", pronunciation: "/məˈtɪriəl/", type: "noun/adjective", vietnamese: "vật liệu/vật chất", example: "This table is made of wood material. (Cái bàn này làm bằng vật liệu gỗ.)", image: ""},
    {english: "matter", pronunciation: "/ˈmætər/", type: "noun/verb", vietnamese: "vấn đề/có vấn đề", example: "What's the matter? (Có chuyện gì vậy?)"},
    {english: "may", pronunciation: "/meɪ/", type: "modal verb", vietnamese: "có thể", example: "May I come in? (Tôi có thể vào không?)", image: ""},
    {english: "me", pronunciation: "/mi/", type: "pronoun", vietnamese: "tôi (tân ngữ)", example: "Give it to me. (Hãy đưa nó cho tôi.)", image: ""},
    {english: "mean", pronunciation: "/min/", type: "verb", vietnamese: "có nghĩa là", example: "What does this word mean? (Từ này có nghĩa là gì?)"},
    {english: "meant", pronunciation: "/mɛnt/", type: "verb", vietnamese: "có ý (quá khứ của mean)", example: "I meant what I said. (Tôi có ý những gì tôi đã nói.)", image: ""},
    {english: "measure", pronunciation: "/ˈmɛʒər/", type: "verb/noun", vietnamese: "đo/sự đo", example: "Measure the distance. (Đo khoảng cách.)", image: ""},
    {english: "meat", pronunciation: "/mit/", type: "noun", vietnamese: "thịt", example: "I like to eat meat. (Tôi thích ăn thịt.)", image: ""},
    {english: "meet", pronunciation: "/mit/", type: "verb", vietnamese: "gặp gỡ", example: "Let's meet tomorrow. (Hãy gặp nhau vào ngày mai.)", image: ""},
    {english: "melody", pronunciation: "/ˈmɛlədi/", type: "noun", vietnamese: "giai điệu", example: "The melody is beautiful. (Giai điệu thật đẹp.)", image: ""},
    {english: "men", pronunciation: "/mɛn/", type: "noun", vietnamese: "những người đàn ông (số nhiều của man)", example: "Many men work here. (Nhiều người đàn ông làm việc ở đây.)", image: ""},
    {english: "metal", pronunciation: "/ˈmɛtl/", type: "noun", vietnamese: "kim loại", example: "Gold is a precious metal. (Vàng là một kim loại quý.)", image: ""},
    {english: "method", pronunciation: "/ˈmɛθəd/", type: "noun", vietnamese: "phương pháp", example: "What's your method of learning? (Phương pháp học của bạn là gì?)"},
    {english: "middle", pronunciation: "/ˈmɪdl/", type: "noun/adjective", vietnamese: "giữa", example: "In the middle of the room. (Ở giữa phòng.)", image: ""},
    {english: "might", pronunciation: "/maɪt/", type: "modal verb", vietnamese: "có thể", example: "It might rain today. (Hôm nay trời có thể mưa.)", image: ""},
    {english: "mile", pronunciation: "/maɪl/", type: "noun", vietnamese: "dặm", example: "One mile is about 1.6 kilometers. (Một dặm khoảng 1.6 kilomet.)", image: ""},
    {english: "milk", pronunciation: "/mɪlk/", type: "noun", vietnamese: "sữa", example: "I drink milk every day. (Tôi uống sữa mỗi ngày.)", image: ""},
    {english: "million", pronunciation: "/ˈmɪljən/", type: "number", vietnamese: "triệu", example: "One million people. (Một triệu người.)", image: ""},
    {english: "mind", pronunciation: "/maɪnd/", type: "noun/verb", vietnamese: "tâm trí/để ý", example: "Do you mind if I open the window? (Bạn có phiền nếu tôi mở cửa sổ không?)", image: ""},
    {english: "mine", pronunciation: "/maɪn/", type: "pronoun", vietnamese: "của tôi", example: "This book is mine. (Cuốn sách này là của tôi.)", image: ""},
    {english: "minute", pronunciation: "/ˈmɪnɪt/", type: "noun", vietnamese: "phút", example: "Wait a minute. (Đợi một phút.)", image: ""},
    {english: "miss", pronunciation: "/mɪs/", type: "verb/noun", vietnamese: "nhớ/bỏ lỡ", example: "I miss you. (Tôi nhớ bạn.)", image: ""},
    {english: "mix", pronunciation: "/mɪks/", type: "verb/noun", vietnamese: "trộn", example: "Mix the ingredients well. (Trộn đều các nguyên liệu.)", image: ""},
    {english: "modern", pronunciation: "/ˈmɑdərn/", type: "adjective", vietnamese: "hiện đại", example: "I like modern art. (Tôi thích nghệ thuật hiện đại.)", image: ""},
    {english: "molecule", pronunciation: "/ˈmɑlɪˌkjul/", type: "noun", vietnamese: "phân tử", example: "Water molecules are very small. (Các phân tử nước rất nhỏ.)", image: ""},
    {english: "moment", pronunciation: "/ˈmoʊmənt/", type: "noun", vietnamese: "khoảnh khắc", example: "Just a moment, please. (Xin đợi một chút.)", image: ""},
    {english: "money", pronunciation: "/ˈmʌni/", type: "noun", vietnamese: "tiền", example: "I need some money. (Tôi cần một ít tiền.)", image: ""},
    {english: "month", pronunciation: "/mʌnθ/", type: "noun", vietnamese: "tháng", example: "There are twelve months in a year. (Có mười hai tháng trong một năm.)", image: ""},
    {english: "moon", pronunciation: "/mun/", type: "noun", vietnamese: "mặt trăng", example: "The moon shines at night. (Mặt trăng chiếu sáng vào ban đêm.)", image: ""},
    {english: "more", pronunciation: "/mɔr/", type: "determiner/adverb", vietnamese: "nhiều hơn", example: "I need more time. (Tôi cần thêm thời gian.)", image: ""},
    {english: "morning", pronunciation: "/ˈmɔrnɪŋ/", type: "noun", vietnamese: "buổi sáng", example: "Good morning! (Chào buổi sáng!)", image: ""},
    {english: "most", pronunciation: "/moʊst/", type: "determiner/adverb", vietnamese: "hầu hết", example: "Most people like music. (Hầu hết mọi người thích âm nhạc.)", image: ""},
    {english: "mother", pronunciation: "/ˈmʌðər/", type: "noun", vietnamese: "mẹ", example: "My mother is kind. (Mẹ tôi rất tốt bụng.)", image: ""},
    {english: "motion", pronunciation: "/ˈmoʊʃən/", type: "noun", vietnamese: "chuyển động", example: "The Earth's motion around the sun. (Chuyển động của Trái đất quanh mặt trời.)", image: ""},
    {english: "mount", pronunciation: "/maʊnt/", type: "verb", vietnamese: "leo trèo", example: "They mounted their horses. (Họ lên ngựa.)", image: ""},
    {english: "mountain", pronunciation: "/ˈmaʊntən/", type: "noun", vietnamese: "núi", example: "Mount Everest is a high mountain. (Núi Everest là một ngọn núi cao.)", image: ""},
    {english: "mouth", pronunciation: "/maʊθ/", type: "noun", vietnamese: "miệng", example: "Open your mouth. (Mở miệng ra.)", image: ""},
    {english: "move", pronunciation: "/muv/", type: "verb/noun", vietnamese: "di chuyển", example: "Don't move! (Đừng di chuyển!)", image: ""},
    {english: "much", pronunciation: "/mʌtʃ/", type: "determiner/adverb", vietnamese: "nhiều", example: "How much money do you have? (Bạn có bao nhiêu tiền?)"},
    {english: "multiply", pronunciation: "/ˈmʌltɪplaɪ/", type: "verb", vietnamese: "nhân lên", example: "Multiply 2 by 3. (Nhân 2 với 3.)", image: ""},
    {english: "music", pronunciation: "/ˈmjuzɪk/", type: "noun", vietnamese: "âm nhạc", example: "I love listening to music. (Tôi thích nghe nhạc.)", image: ""},
    {english: "must", pronunciation: "/mʌst/", type: "modal verb", vietnamese: "phải", example: "You must follow the rules. (Bạn phải tuân theo các quy tắc.)", image: ""},
    {english: "my", pronunciation: "/maɪ/", type: "determiner", vietnamese: "của tôi", example: "This is my book. (Đây là sách của tôi.)", image: ""},

    // N (50 từ)
    {english: "name", pronunciation: "/neɪm/", type: "noun/verb", vietnamese: "tên/đặt tên", example: "What's your name? (Tên bạn là gì?)"},
    {english: "nation", pronunciation: "/ˈneɪʃən/", type: "noun", vietnamese: "quốc gia", example: "Every nation has its own culture. (Mỗi quốc gia có nền văn hóa riêng.)", image: ""},
    {english: "natural", pronunciation: "/ˈnætʃərəl/", type: "adjective", vietnamese: "tự nhiên", example: "It's a natural phenomenon. (Đó là một hiện tượng tự nhiên.)", image: ""},
    {english: "nature", pronunciation: "/ˈneɪtʃər/", type: "noun", vietnamese: "tự nhiên", example: "I love spending time in nature. (Tôi thích dành thời gian trong tự nhiên.)", image: ""},
    {english: "near", pronunciation: "/nɪr/", type: "preposition/adverb", vietnamese: "gần", example: "The shop is near my house. (Cửa hàng gần nhà tôi.)", image: ""},
    {english: "necessary", pronunciation: "/ˈnɛsəsɛri/", type: "adjective", vietnamese: "cần thiết", example: "Sleep is necessary for health. (Giấc ngủ cần thiết cho sức khỏe.)", image: ""},
    {english: "neck", pronunciation: "/nɛk/", type: "noun", vietnamese: "cổ", example: "He has a long neck. (Anh ấy có cổ dài.)", image: ""},
    {english: "need", pronunciation: "/nid/", type: "verb/noun", vietnamese: "cần", example: "I need help. (Tôi cần giúp đỡ.)", image: ""},
    {english: "neighbor", pronunciation: "/ˈneɪbər/", type: "noun", vietnamese: "hàng xóm", example: "My neighbor is very friendly. (Hàng xóm của tôi rất thân thiện.)", image: ""},
    {english: "never", pronunciation: "/ˈnɛvər/", type: "adverb", vietnamese: "không bao giờ", example: "I never smoke. (Tôi không bao giờ hút thuốc.)", image: ""},
    {english: "new", pronunciation: "/nu/", type: "adjective", vietnamese: "mới", example: "I bought a new phone. (Tôi đã mua một chiếc điện thoại mới.)", image: ""},
    {english: "next", pronunciation: "/nɛkst/", type: "adjective/adverb", vietnamese: "tiếp theo", example: "What's next? (Tiếp theo là gì?)", image: ""},
    {english: "night", pronunciation: "/naɪt/", type: "noun", vietnamese: "đêm", example: "Good night! (Chúc ngủ ngon!)", image: ""},
    {english: "nine", pronunciation: "/naɪn/", type: "number", vietnamese: "chín", example: "There are nine planets. (Có chín hành tinh.)", image: ""},
    {english: "no", pronunciation: "/noʊ/", type: "determiner", vietnamese: "không", example: "I have no money. (Tôi không có tiền.)", image: ""},
    {english: "noise", pronunciation: "/nɔɪz/", type: "noun", vietnamese: "tiếng ồn", example: "The noise is too loud. (Tiếng ồn quá to.)", image: ""},
    {english: "noon", pronunciation: "/nun/", type: "noun", vietnamese: "trưa", example: "It's noon. (Đã trưa rồi.)", image: ""},
    {english: "nor", pronunciation: "/nɔr/", type: "conjunction/adverb", vietnamese: "cũng không", example: "Neither he nor I went. (Cả anh ấy và tôi đều không đi.)", image: ""},
    {english: "north", pronunciation: "/nɔrθ/", type: "noun/adjective", vietnamese: "phía bắc", example: "The wind comes from the north. (Gió đến từ phía bắc.)", image: ""},
    {english: "nose", pronunciation: "/noʊz/", type: "noun", vietnamese: "mũi", example: "Your nose is on your face. (Mũi của bạn ở trên mặt.)", image: ""},
    {english: "note", pronunciation: "/noʊt/", type: "noun/verb", vietnamese: "ghi chú/ghi lại", example: "Write a note. (Viết một ghi chú.)", image: ""},
    {english: "nothing", pronunciation: "/ˈnʌθɪŋ/", type: "pronoun", vietnamese: "không gì cả", example: "There's nothing here. (Không có gì ở đây.)", image: ""},
    {english: "notice", pronunciation: "/ˈnoʊtɪs/", type: "noun/verb", vietnamese: "thông báo/nhận thấy", example: "Did you notice him? (Bạn có nhận thấy anh ấy không?)", image: ""},
    {english: "noun", pronunciation: "/naʊn/", type: "noun", vietnamese: "danh từ", example: "Cat is a noun. (Mèo là một danh từ.)", image: ""},
    {english: "now", pronunciation: "/naʊ/", type: "adverb", vietnamese: "bây giờ", example: "Do it now! (Làm nó ngay bây giờ!)", image: ""},
    {english: "number", pronunciation: "/ˈnʌmbər/", type: "noun", vietnamese: "số", example: "What's your phone number? (Số điện thoại của bạn là gì?)", image: ""},
    {english: "numeral", pronunciation: "/ˈnjumərəl/", type: "noun", vietnamese: "chữ số", example: "The numeral 5. (Chữ số 5.)", image: ""},

    // O (50 từ)
    {english: "object", pronunciation: "/ˈɑbdʒɪkt/", type: "noun/verb", vietnamese: "đối tượng/phản đối", example: "What is that object? (Đó là vật gì?)"},
    {english: "observe", pronunciation: "/əbˈzɜrv/", type: "verb", vietnamese: "quan sát", example: "Observe the stars. (Quan sát các vì sao.)", image: ""},
    {english: "occur", pronunciation: "/əˈkɜr/", type: "verb", vietnamese: "xảy ra", example: "When did it occur? (Nó xảy ra khi nào?)"},
    {english: "ocean", pronunciation: "/ˈoʊʃən/", type: "noun", vietnamese: "đại dương", example: "The ocean is vast. (Đại dương rộng lớn.)", image: ""},
    {english: "of", pronunciation: "/ʌv/", type: "preposition", vietnamese: "của", example: "The capital of Vietnam. (Thủ đô của Việt Nam.)", image: ""},
    {english: "off", pronunciation: "/ɔf/", type: "adverb/preposition", vietnamese: "tắt/khỏi", example: "Turn off the light. (Tắt đèn đi.)", image: ""},
    {english: "offer", pronunciation: "/ˈɔfər/", type: "verb/noun", vietnamese: "đề nghị/sự đề nghị", example: "I accept your offer. (Tôi chấp nhận lời đề nghị của bạn.)", image: ""},
    {english: "office", pronunciation: "/ˈɔfɪs/", type: "noun", vietnamese: "văn phòng", example: "He works in an office. (Anh ấy làm việc ở văn phòng.)", image: ""},
    {english: "often", pronunciation: "/ˈɔfən/", type: "adverb", vietnamese: "thường xuyên", example: "I often go to the library. (Tôi thường xuyên đi thư viện.)", image: ""},
    {english: "oh", pronunciation: "/oʊ/", type: "exclamation", vietnamese: "ô (thán từ)", example: "Oh, I see. (Ồ, tôi hiểu rồi.)", image: ""},
    {english: "oil", pronunciation: "/ɔɪl/", type: "noun", vietnamese: "dầu", example: "Oil is used to cook. (Dầu được dùng để nấu ăn.)", image: ""},
    {english: "old", pronunciation: "/oʊld/", type: "adjective", vietnamese: "cũ/già", example: "He is an old man. (Ông ấy là một người đàn ông già.)", image: ""},
    {english: "on", pronunciation: "/ɑn/", type: "preposition/adverb", vietnamese: "trên", example: "The book is on the table. (Cuốn sách ở trên bàn.)", image: ""},
    {english: "once", pronunciation: "/wʌns/", type: "adverb/conjunction", vietnamese: "một lần/khi", example: "Once upon a time. (Ngày xửa ngày xưa.)", image: ""},
    {english: "one", pronunciation: "/wʌn/", type: "number/pronoun", vietnamese: "một", example: "I have one apple. (Tôi có một quả táo.)", image: ""},
    {english: "only", pronunciation: "/ˈoʊnli/", type: "adjective/adverb", vietnamese: "duy nhất/chỉ", example: "You are my only hope. (Bạn là hy vọng duy nhất của tôi.)", image: ""},
    {english: "open", pronunciation: "/ˈoʊpən/", type: "adjective/verb", vietnamese: "mở", example: "Open the door. (Mở cửa ra.)", image: ""},
    {english: "operate", pronunciation: "/ˈɑpəreɪt/", type: "verb", vietnamese: "vận hành", example: "The machine operates smoothly. (Cái máy vận hành trơn tru.)", image: ""},
    {english: "opposite", pronunciation: "/ˈɑpəzɪt/", type: "adjective/preposition", vietnamese: "đối diện/ngược lại", example: "He lives in the house opposite mine. (Anh ấy sống ở ngôi nhà đối diện nhà tôi.)", image: ""},
    {english: "or", pronunciation: "/ɔr/", type: "conjunction", vietnamese: "hoặc", example: "Coffee or tea? (Cà phê hay trà?)"},
    {english: "order", pronunciation: "/ˈɔrdər/", type: "noun/verb", vietnamese: "thứ tự/đặt hàng", example: "Keep things in order. (Giữ mọi thứ theo thứ tự.)", image: ""},
    {english: "organ", pronunciation: "/ˈɔrɡən/", type: "noun", vietnamese: "cơ quan (trong cơ thể)/đàn organ", example: "The heart is a vital organ. (Tim là một cơ quan quan trọng.)", image: ""},
    {english: "original", pronunciation: "/əˈrɪdʒɪnəl/", type: "adjective", vietnamese: "nguyên bản", example: "This is the original painting. (Đây là bức tranh gốc.)", image: ""},
    {english: "other", pronunciation: "/ˈʌðər/", type: "adjective/pronoun", vietnamese: "khác", example: "Do you have any other questions? (Bạn có câu hỏi nào khác không?)", image: ""},
    {english: "our", pronunciation: "/ˈaʊər/", type: "determiner", vietnamese: "của chúng ta", example: "This is our house. (Đây là nhà của chúng tôi.)", image: ""},
    {english: "out", pronunciation: "/aʊt/", type: "adverb", vietnamese: "ra ngoài", example: "Go out and play. (Đi ra ngoài chơi.)", image: ""},
    {english: "over", pronunciation: "/ˈoʊvər/", type: "preposition/adverb", vietnamese: "trên/hơn", example: "The bird flew over the house. (Con chim bay trên ngôi nhà.)", image: ""},
    {english: "own", pronunciation: "/oʊn/", type: "adjective/verb", vietnamese: "của riêng/sở hữu", example: "I have my own car. (Tôi có xe hơi riêng.)", image: ""},
    {english: "oxygen", pronunciation: "/ˈɑksɪdʒən/", type: "noun", vietnamese: "oxy", example: "We breathe oxygen. (Chúng ta hít thở oxy.)", image: ""},

    // P (50 từ)
    {english: "page", pronunciation: "/peɪdʒ/", type: "noun", vietnamese: "trang", example: "Read page 10. (Đọc trang 10.)", image: ""},
    {english: "paint", pronunciation: "/peɪnt/", type: "noun/verb", vietnamese: "sơn/vẽ", example: "I need to buy some paint. (Tôi cần mua một ít sơn.)", image: ""},
    {english: "pair", pronunciation: "/pɛr/", type: "noun", vietnamese: "cặp", example: "A pair of shoes. (Một đôi giày.)", image: ""},
    {english: "paper", pronunciation: "/ˈpeɪpər/", type: "noun", vietnamese: "giấy", example: "Write on the paper. (Viết lên giấy.)", image: ""},
    {english: "paragraph", pronunciation: "/ˈpærəɡræf/", type: "noun", vietnamese: "đoạn văn", example: "Read the first paragraph. (Đọc đoạn văn đầu tiên.)", image: ""},
    {english: "parent", pronunciation: "/ˈpɛrənt/", type: "noun", vietnamese: "cha/mẹ", example: "Respect your parents. (Hãy tôn trọng cha mẹ bạn.)", image: ""},
    {english: "part", pronunciation: "/pɑrt/", type: "noun", vietnamese: "phần", example: "This is part of the problem. (Đây là một phần của vấn đề.)", image: ""},
    {english: "particular", pronunciation: "/pərˈtɪkjələr/", type: "adjective", vietnamese: "cụ thể", example: "Is there any particular reason? (Có lý do cụ thể nào không?)", image: ""},
    {english: "party", pronunciation: "/ˈpɑrti/", type: "noun", vietnamese: "bữa tiệc/đảng", example: "Let's have a party. (Hãy tổ chức một bữa tiệc.)", image: ""},
    {english: "pass", pronunciation: "/pæs/", type: "verb", vietnamese: "vượt qua", example: "He passed the exam. (Anh ấy đã vượt qua kỳ thi.)", image: ""},
    {english: "past", pronunciation: "/pæst/", type: "noun/adjective", vietnamese: "quá khứ", example: "Learn from the past. (Học hỏi từ quá khứ.)", image: ""},
    {english: "path", pronunciation: "/pæθ/", type: "noun", vietnamese: "lối đi", example: "Follow the path. (Đi theo lối đi.)", image: ""},
    {english: "pattern", pronunciation: "/ˈpætərn/", type: "noun", vietnamese: "mẫu", example: "The dress has a beautiful pattern. (Chiếc váy có họa tiết đẹp.)", image: ""},
    {english: "pay", pronunciation: "/peɪ/", type: "verb/noun", vietnamese: "trả tiền/tiền lương", example: "I need to pay the bill. (Tôi cần thanh toán hóa đơn.)", image: ""},
    {english: "people", pronunciation: "/ˈpipəl/", type: "noun", vietnamese: "con người", example: "Many people live in this city. (Nhiều người sống ở thành phố này.)", image: ""},
    {english: "perhaps", pronunciation: "/pərˈhæps/", type: "adverb", vietnamese: "có lẽ", example: "Perhaps he'll come. (Có lẽ anh ấy sẽ đến.)", image: ""},
    {english: "period", pronunciation: "/ˈpɪriəd/", type: "noun", vietnamese: "giai đoạn", example: "It's a difficult period. (Đây là một giai đoạn khó khăn.)", image: ""},
    {english: "person", pronunciation: "/ˈpɜrsən/", type: "noun", vietnamese: "người", example: "He is a good person. (Anh ấy là một người tốt.)", image: ""},
    {english: "phrase", pronunciation: "/freɪz/", type: "noun", vietnamese: "cụm từ", example: "Learn this common phrase. (Học cụm từ thông dụng này.)", image: ""},
    {english: "pick", pronunciation: "/pɪk/", type: "verb", vietnamese: "nhặt/chọn", example: "Pick up the pen. (Nhặt bút lên.)", image: ""},
    {english: "picture", pronunciation: "/ˈpɪktʃər/", type: "noun", vietnamese: "bức tranh/ảnh", example: "Look at the picture. (Nhìn bức tranh.)", image: ""},
    {english: "piece", pronunciation: "/pis/", type: "noun", vietnamese: "mảnh", example: "A piece of cake. (Một miếng bánh.)", image: ""},
    {english: "pitch", pronunciation: "/pɪtʃ/", type: "noun", vietnamese: "sân (thể thao)/cao độ", example: "The football pitch is green. (Sân bóng đá màu xanh.)", image: ""},
    {english: "place", pronunciation: "/pleɪs/", type: "noun/verb", vietnamese: "nơi/đặt", example: "This is a beautiful place. (Đây là một nơi đẹp.)", image: ""},
    {english: "plain", pronunciation: "/pleɪn/", type: "adjective", vietnamese: "đơn giản/rõ ràng", example: "It's a plain dress. (Đó là một chiếc váy đơn giản.)", image: ""},
    {english: "plan", pronunciation: "/plæn/", type: "noun/verb", vietnamese: "kế hoạch", example: "What's your plan? (Kế hoạch của bạn là gì?)"},
    {english: "plane", pronunciation: "/pleɪn/", type: "noun", vietnamese: "máy bay", example: "The plane is flying high. (Máy bay đang bay cao.)", image: ""},
    {english: "planet", pronunciation: "/ˈplænɪt/", type: "noun", vietnamese: "hành tinh", example: "Earth is a planet. (Trái đất là một hành tinh.)", image: ""},
    {english: "plant", pronunciation: "/plænt/", type: "noun/verb", vietnamese: "thực vật/trồng", example: "She plants flowers. (Cô ấy trồng hoa.)", image: ""},
    {english: "play", pronunciation: "/pleɪ/", type: "verb/noun", vietnamese: "chơi", example: "Let's play games. (Hãy chơi trò chơi.)", image: ""},
    {english: "please", pronunciation: "/pliz/", type: "verb/adverb", vietnamese: "làm ơn", example: "Please help me. (Làm ơn giúp tôi.)", image: ""},
    {english: "plural", pronunciation: "/ˈplʊrəl/", type: "adjective/noun", vietnamese: "số nhiều", example: "Cats is the plural of cat. (Cats là số nhiều của cat.)", image: ""},
    {english: "poem", pronunciation: "/ˈpoʊɪm/", type: "noun", vietnamese: "bài thơ", example: "He wrote a beautiful poem. (Anh ấy đã viết một bài thơ đẹp.)", image: ""},
    {english: "point", pronunciation: "/pɔɪnt/", type: "noun/verb", vietnamese: "điểm/chỉ", example: "What's your point? (Ý của bạn là gì?)"},
    {english: "poor", pronunciation: "/pʊr/", type: "adjective", vietnamese: "nghèo", example: "Help the poor. (Giúp đỡ người nghèo.)", image: ""},
    {english: "popular", pronunciation: "/ˈpɑpjələr/", type: "adjective", vietnamese: "phổ biến", example: "Football is a popular sport. (Bóng đá là môn thể thao phổ biến.)", image: ""},
    {english: "populate", pronunciation: "/ˈpɑpjəleɪt/", type: "verb", vietnamese: "sinh sống", example: "Fish populate the lake. (Cá sống trong hồ.)", image: ""},
    {english: "port", pronunciation: "/pɔrt/", type: "noun", vietnamese: "cảng", example: "The ship arrived at the port. (Con tàu đã đến cảng.)", image: ""},
    {english: "pose", pronunciation: "/poʊz/", type: "verb/noun", vietnamese: "đặt ra/tạo dáng", example: "She posed for a photo. (Cô ấy tạo dáng để chụp ảnh.)", image: ""},
    {english: "position", pronunciation: "/pəˈzɪʃən/", type: "noun", vietnamese: "vị trí", example: "What's your position in the company? (Vị trí của bạn trong công ty là gì?)", image: ""},
    {english: "possible", pronunciation: "/ˈpɑsəbəl/", type: "adjective", vietnamese: "có thể", example: "It's possible to finish today. (Có thể hoàn thành hôm nay.)", image: ""},
    {english: "post", pronunciation: "/poʊst/", type: "noun/verb", vietnamese: "bài đăng/gửi thư", example: "He made a post on social media. (Anh ấy đã đăng bài trên mạng xã hội.)", image: ""},
    {english: "pound", pronunciation: "/paʊnd/", type: "noun", vietnamese: "pound (đơn vị cân nặng)", example: "One pound is about 0.45 kg. (Một pound khoảng 0.45 kg.)", image: ""},
    {english: "power", pronunciation: "/ˈpaʊər/", type: "noun", vietnamese: "sức mạnh/năng lượng", example: "The country has great power. (Quốc gia có sức mạnh lớn.)", image: ""},
    {english: "practice", pronunciation: "/ˈpræktɪs/", type: "noun/verb", vietnamese: "thực hành", example: "Practice makes perfect. (Thực hành tạo nên sự hoàn hảo.)", image: ""},
    {english: "prepare", pronunciation: "/prɪˈpɛr/", type: "verb", vietnamese: "chuẩn bị", example: "Prepare for the exam. (Chuẩn bị cho kỳ thi.)", image: ""},
    {english: "present", pronunciation: "/ˈprɛzənt/", type: "noun/adjective", vietnamese: "hiện tại/quà", example: "The present situation is difficult. (Tình hình hiện tại khó khăn.)", image: ""},
    {english: "press", pronunciation: "/prɛs/", type: "verb/noun", vietnamese: "nhấn/báo chí", example: "Press the button. (Nhấn nút.)", image: ""},
    {english: "pretty", pronunciation: "/ˈprɪti/", type: "adjective/adverb", vietnamese: "xinh đẹp/khá", example: "She is very pretty. (Cô ấy rất xinh đẹp.)", image: ""},
    {english: "print", pronunciation: "/prɪnt/", type: "verb/noun", vietnamese: "in", example: "Print the document. (In tài liệu.)", image: ""},
    {english: "probable", pronunciation: "/ˈprɑbəbəl/", type: "adjective", vietnamese: "có khả năng", example: "It's probable that he will come. (Có khả năng anh ấy sẽ đến.)", image: ""},
    {english: "problem", pronunciation: "/ˈprɑbləm/", type: "noun", vietnamese: "vấn đề", example: "I have a problem. (Tôi có một vấn đề.)", image: ""},
    {english: "process", pronunciation: "/ˈprɑsɛs/", type: "noun/verb", vietnamese: "quá trình/xử lý", example: "The manufacturing process is complex. (Quá trình sản xuất phức tạp.)", image: ""},
    {english: "produce", pronunciation: "/prəˈdus/", type: "verb", vietnamese: "sản xuất", example: "This factory produces cars. (Nhà máy này sản xuất ô tô.)", image: ""},
    {english: "product", pronunciation: "/ˈprɑdʌkt/", type: "noun", vietnamese: "sản phẩm", example: "This is a new product. (Đây là một sản phẩm mới.)", image: ""},
    {english: "proper", pronunciation: "/ˈprɑpər/", type: "adjective", vietnamese: "phù hợp", example: "Follow proper procedures. (Tuân thủ các quy trình phù hợp.)", image: ""},
    {english: "property", pronunciation: "/ˈprɑpərti/", type: "noun", vietnamese: "tài sản", example: "He owns a lot of property. (Anh ấy sở hữu nhiều tài sản.)", image: ""},
    {english: "protect", pronunciation: "/prəˈtɛkt/", type: "verb", vietnamese: "bảo vệ", example: "Protect your skin from the sun. (Bảo vệ da bạn khỏi ánh nắng mặt trời.)", image: ""},
    {english: "prove", pronunciation: "/pruv/", type: "verb", vietnamese: "chứng minh", example: "Can you prove it? (Bạn có thể chứng minh điều đó không?)", image: ""},
    {english: "provide", pronunciation: "/prəˈvaɪd/", type: "verb", vietnamese: "cung cấp", example: "We provide excellent service. (Chúng tôi cung cấp dịch vụ xuất sắc.)", image: ""},
    {english: "pull", pronunciation: "/pʊl/", type: "verb/noun", vietnamese: "kéo", example: "Pull the door. (Kéo cửa.)", image: ""},
    {english: "push", pronunciation: "/pʊʃ/", type: "verb/noun", vietnamese: "đẩy", example: "Push the door. (Đẩy cửa.)", image: ""},
    {english: "put", pronunciation: "/pʊt/", type: "verb", vietnamese: "đặt, để", example: "Put the book on the table. (Đặt cuốn sách lên bàn.)", image: ""},

    // Q (50 từ)
    {english: "quart", pronunciation: "/kwɔrt/", type: "noun", vietnamese: "quart (đơn vị đo)", example: "A quart of milk. (Một quart sữa.)", image: ""},
    {english: "question", pronunciation: "/ˈkwɛstʃən/", type: "noun/verb", vietnamese: "câu hỏi/hỏi", example: "I have a question. (Tôi có một câu hỏi.)", image: ""},
    {english: "quick", pronunciation: "/kwɪk/", type: "adjective", vietnamese: "nhanh", example: "He is a quick learner. (Anh ấy là người học nhanh.)", image: ""},
    {english: "quiet", pronunciation: "/ˈkwaɪət/", type: "adjective", vietnamese: "yên tĩnh", example: "Keep quiet. (Hãy giữ im lặng.)", image: ""},
    {english: "quite", pronunciation: "/kwaɪt/", type: "adverb", vietnamese: "khá", example: "It's quite cold today. (Hôm nay trời khá lạnh.)", image: ""},
    {english: "quotient", pronunciation: "/ˈkwoʊʃənt/", type: "noun", vietnamese: "thương số (toán học)", example: "The quotient of 10 divided by 2 is 5. (Thương số của 10 chia cho 2 là 5.)", image: ""},

    // R (50 từ)
    {english: "race", pronunciation: "/reɪs/", type: "noun/verb", vietnamese: "cuộc đua/đua", example: "Who won the race? (Ai đã thắng cuộc đua?)"},
    {english: "radio", pronunciation: "/ˈreɪdioʊ/", type: "noun", vietnamese: "đài radio", example: "Listen to the radio. (Nghe đài.)", image: ""},
    {english: "rail", pronunciation: "/reɪl/", type: "noun", vietnamese: "đường ray", example: "The train runs on rails. (Tàu chạy trên đường ray.)", image: ""},
    {english: "rain", pronunciation: "/reɪn/", type: "noun/verb", vietnamese: "mưa", example: "It's raining outside. (Bên ngoài trời đang mưa.)", image: ""},
    {english: "raise", pronunciation: "/reɪz/", type: "verb", vietnamese: "nâng lên", example: "Raise your hand. (Giơ tay lên.)", image: ""},
    {english: "ran", pronunciation: "/ræn/", type: "verb", vietnamese: "đã chạy (quá khứ của run)", example: "He ran fast. (Anh ấy đã chạy nhanh.)", image: ""},
    {english: "range", pronunciation: "/reɪndʒ/", type: "noun", vietnamese: "phạm vi", example: "The price range is wide. (Phạm vi giá rộng.)", image: ""},
    {english: "rather", pronunciation: "/ˈræðər/", type: "adverb", vietnamese: "thà...còn hơn", example: "I'd rather stay home. (Tôi thà ở nhà còn hơn.)", image: ""},
    {english: "reach", pronunciation: "/ritʃ/", type: "verb", vietnamese: "đến/tới", example: "Can you reach the top shelf? (Bạn có thể với tới kệ trên cùng không?)", image: ""},
    {english: "read", pronunciation: "/rid/", type: "verb", vietnamese: "đọc", example: "I like to read books. (Tôi thích đọc sách.)", image: ""},
    {english: "ready", pronunciation: "/ˈrɛdi/", type: "adjective", vietnamese: "sẵn sàng", example: "Are you ready? (Bạn đã sẵn sàng chưa?)"},
    {english: "real", pronunciation: "/ril/", type: "adjective", vietnamese: "thật", example: "Is it real? (Nó có thật không?)"},
    {english: "reason", pronunciation: "/ˈrizən/", type: "noun", vietnamese: "lý do", example: "What's the reason? (Lý do là gì?)"},
    {english: "receive", pronunciation: "/rɪˈsiv/", type: "verb", vietnamese: "nhận", example: "I received your letter. (Tôi đã nhận được thư của bạn.)", image: ""},
    {english: "record", pronunciation: "/ˈrɛkərd/", type: "noun/verb", vietnamese: "ghi âm/ghi chép", example: "Record the meeting. (Ghi lại cuộc họp.)", image: ""},
    {english: "red", pronunciation: "/rɛd/", type: "adjective", vietnamese: "màu đỏ", example: "The car is red. (Xe hơi màu đỏ.)", image: ""},
    {english: "region", pronunciation: "/ˈridʒən/", type: "noun", vietnamese: "khu vực", example: "This is an agricultural region. (Đây là một khu vực nông nghiệp.)", image: ""},
    {english: "remember", pronunciation: "/rɪˈmɛmbər/", type: "verb", vietnamese: "nhớ", example: "Do you remember me? (Bạn có nhớ tôi không?)", image: ""},
    {english: "repeat", pronunciation: "/rɪˈpit/", type: "verb", vietnamese: "lặp lại", example: "Please repeat that. (Xin hãy nhắc lại.)", image: ""},
    {english: "reply", pronunciation: "/rɪˈplaɪ/", type: "verb/noun", vietnamese: "trả lời", example: "Reply to my email. (Trả lời email của tôi.)", image: ""},
    {english: "represent", pronunciation: "/ˌrɛprɪˈzɛnt/", type: "verb", vietnamese: "đại diện", example: "He represents his country. (Anh ấy đại diện cho đất nước mình.)", image: ""},
    {english: "require", pronunciation: "/rɪˈkwaɪər/", type: "verb", vietnamese: "yêu cầu", example: "This job requires skill. (Công việc này yêu cầu kỹ năng.)", image: ""},
    {english: "rest", pronunciation: "/rɛst/", type: "noun/verb", vietnamese: "nghỉ ngơi", example: "Take a rest. (Hãy nghỉ ngơi.)", image: ""},
    {english: "result", pronunciation: "/rɪˈzʌlt/", type: "noun", vietnamese: "kết quả", example: "What's the result? (Kết quả là gì?)"},
    {english: "rich", pronunciation: "/rɪtʃ/", type: "adjective", vietnamese: "giàu có", example: "He is a rich man. (Anh ấy là một người đàn ông giàu có.)", image: ""},
    {english: "ride", pronunciation: "/raɪd/", type: "verb/noun", vietnamese: "cưỡi/chuyến đi", example: "Let's go for a ride. (Hãy đi một chuyến.)", image: ""},
    {english: "right", pronunciation: "/raɪt/", type: "adjective/adverb", vietnamese: "đúng/bên phải", example: "You are right. (Bạn đúng.)", image: ""},
    {english: "ring", pronunciation: "/rɪŋ/", type: "noun/verb", vietnamese: "nhẫn/chuông", example: "She wears a ring. (Cô ấy đeo một chiếc nhẫn.)", image: ""},
    {english: "rise", pronunciation: "/raɪz/", type: "verb/noun", vietnamese: "tăng/sự tăng", example: "The sun rises in the east. (Mặt trời mọc ở phía đông.)", image: ""},
    {english: "river", pronunciation: "/ˈrɪvər/", type: "noun", vietnamese: "sông", example: "The river flows fast. (Con sông chảy nhanh.)", image: ""},
    {english: "road", pronunciation: "/roʊd/", type: "noun", vietnamese: "con đường", example: "The road is long. (Con đường dài.)", image: ""},
    {english: "rock", pronunciation: "/rɑk/", type: "noun", vietnamese: "đá", example: "The mountain is made of rock. (Ngọn núi làm bằng đá.)", image: ""},
    {english: "roll", pronunciation: "/roʊl/", type: "verb/noun", vietnamese: "lăn/cuộn", example: "The ball rolled down the hill. (Quả bóng lăn xuống đồi.)", image: ""},
    {english: "room", pronunciation: "/rum/", type: "noun", vietnamese: "phòng", example: "My room is small. (Phòng của tôi nhỏ.)", image: ""},
    {english: "root", pronunciation: "/rut/", type: "noun", vietnamese: "rễ cây", example: "The tree has deep roots. (Cái cây có rễ sâu.)", image: ""},
    {english: "rope", pronunciation: "/roʊp/", type: "noun", vietnamese: "dây thừng", example: "Tie the boat with a rope. (Buộc thuyền bằng dây thừng.)", image: ""},
    {english: "rose", pronunciation: "/roʊz/", type: "noun", vietnamese: "hoa hồng", example: "A red rose. (Một bông hồng đỏ.)", image: ""},
    {english: "round", pronunciation: "/raʊnd/", type: "adjective/preposition", vietnamese: "tròn/xung quanh", example: "The Earth is round. (Trái đất tròn.)", image: ""},
    {english: "row", pronunciation: "/roʊ/", type: "noun", vietnamese: "hàng", example: "Sit in the first row. (Ngồi ở hàng đầu tiên.)", image: ""},
    {english: "rub", pronunciation: "/rʌb/", type: "verb", vietnamese: "chà xát", example: "Rub your hands together. (Xoa hai bàn tay vào nhau.)", image: ""},
    {english: "rule", pronunciation: "/rul/", type: "noun/verb", vietnamese: "quy tắc/cai trị", example: "Follow the rules. (Tuân thủ các quy tắc.)", image: ""},
    {english: "run", pronunciation: "/rʌn/", type: "verb", vietnamese: "chạy", example: "He runs every morning. (Anh ấy chạy mỗi sáng.)", image: ""},

    // S (50 từ)
    {english: "safe", pronunciation: "/seɪf/", type: "adjective", vietnamese: "an toàn", example: "Keep safe. (Hãy giữ an toàn.)", image: ""},
    {english: "said", pronunciation: "/sɛd/", type: "verb", vietnamese: "đã nói (quá khứ của say)", example: "He said hello. (Anh ấy đã nói xin chào.)", image: ""},
    {english: "sail", pronunciation: "/seɪl/", type: "verb/noun", vietnamese: "chèo thuyền/buồm", example: "The boat sails fast. (Con thuyền chạy nhanh.)", image: ""},
    {english: "salt", pronunciation: "/sɔlt/", type: "noun", vietnamese: "muối", example: "Add salt to the food. (Thêm muối vào thức ăn.)", image: ""},
    {english: "same", pronunciation: "/seɪm/", type: "adjective", vietnamese: "giống", example: "We have the same idea. (Chúng tôi có cùng ý tưởng.)", image: ""},
    {english: "sand", pronunciation: "/sænd/", type: "noun", vietnamese: "cát", example: "Children play in the sand. (Trẻ em chơi trong cát.)", image: ""},
    {english: "sat", pronunciation: "/sæt/", type: "verb", vietnamese: "đã ngồi (quá khứ của sit)", example: "He sat on the chair. (Anh ấy đã ngồi trên ghế.)", image: ""},
    {english: "save", pronunciation: "/seɪv/", type: "verb", vietnamese: "tiết kiệm/cứu", example: "Save your money. (Tiết kiệm tiền của bạn.)", image: ""},
    {english: "saw", pronunciation: "/sɔ/", type: "verb", vietnamese: "đã thấy (quá khứ của see)", example: "I saw him yesterday. (Tôi đã gặp anh ấy hôm qua.)", image: ""},
    {english: "say", pronunciation: "/seɪ/", type: "verb", vietnamese: "nói", example: "Say hello. (Nói xin chào.)", image: ""},
    {english: "scale", pronunciation: "/skeɪl/", type: "noun", vietnamese: "thang đo", example: "Measure on a scale. (Đo trên thang đo.)", image: ""},
    {english: "school", pronunciation: "/skul/", type: "noun", vietnamese: "trường học", example: "I go to school. (Tôi đi học.)", image: ""},
    {english: "science", pronunciation: "/ˈsaɪəns/", type: "noun", vietnamese: "khoa học", example: "She studies science. (Cô ấy học khoa học.)", image: ""},
    {english: "score", pronunciation: "/skɔr/", type: "noun/verb", vietnamese: "điểm số", example: "What's the score? (Tỷ số là bao nhiêu?)"},
    {english: "sea", pronunciation: "/si/", type: "noun", vietnamese: "biển", example: "We swam in the sea. (Chúng tôi bơi trong biển.)", image: ""},
    {english: "search", pronunciation: "/sɜrtʃ/", type: "noun/verb", vietnamese: "tìm kiếm", example: "Search for information online. (Tìm kiếm thông tin trực tuyến.)", image: ""},
    {english: "season", pronunciation: "/ˈsizən/", type: "noun", vietnamese: "mùa", example: "Autumn is my favorite season. (Mùa thu là mùa yêu thích của tôi.)", image: ""},
    {english: "seat", pronunciation: "/sit/", type: "noun", vietnamese: "chỗ ngồi", example: "Take a seat. (Hãy ngồi xuống.)", image: ""},
    {english: "second", pronunciation: "/ˈsɛkənd/", type: "determiner/noun", vietnamese: "thứ hai/giây", example: "This is my second book. (Đây là cuốn sách thứ hai của tôi.)", image: ""},
    {english: "section", pronunciation: "/ˈsɛkʃən/", type: "noun", vietnamese: "phần", example: "Read section one. (Đọc phần một.)", image: ""},
    {english: "see", pronunciation: "/si/", type: "verb", vietnamese: "nhìn thấy", example: "I can see you. (Tôi có thể nhìn thấy bạn.)", image: ""},
    {english: "seed", pronunciation: "/sid/", type: "noun", vietnamese: "hạt giống", example: "Plant a seed. (Trồng một hạt giống.)", image: ""},
    {english: "seem", pronunciation: "/sim/", type: "verb", vietnamese: "dường như", example: "He seems happy. (Anh ấy dường như hạnh phúc.)", image: ""},
    {english: "segment", pronunciation: "/ˈsɛɡmənt/", type: "noun", vietnamese: "đoạn", example: "A segment of the circle. (Một đoạn của hình tròn.)", image: ""},
    {english: "select", pronunciation: "/sɪˈlɛkt/", type: "verb", vietnamese: "chọn", example: "Select your preferred language. (Chọn ngôn ngữ ưa thích của bạn.)", image: ""},
    {english: "self", pronunciation: "/sɛlf/", type: "pronoun", vietnamese: "bản thân", example: "Do it yourself. (Tự làm đi.)", image: ""},
    {english: "sell", pronunciation: "/sɛl/", type: "verb", vietnamese: "bán", example: "She sells flowers. (Cô ấy bán hoa.)", image: ""},
    {english: "send", pronunciation: "/sɛnd/", type: "verb", vietnamese: "gửi", example: "Send me an email. (Gửi cho tôi một email.)", image: ""},
    {english: "sense", pronunciation: "/sɛns/", type: "noun", vietnamese: "giác quan", example: "She has a good sense of humor. (Cô ấy có khiếu hài hước.)", image: ""},
    {english: "sent", pronunciation: "/sɛnt/", type: "verb", vietnamese: "đã gửi (quá khứ của send)", example: "I sent the letter yesterday. (Tôi đã gửi lá thư hôm qua.)", image: ""},
    {english: "sentence", pronunciation: "/ˈsɛntəns/", type: "noun", vietnamese: "câu", example: "Write a sentence. (Viết một câu.)", image: ""},
    {english: "separate", pronunciation: "/ˈsɛpəreɪt/", type: "adjective/verb", vietnamese: "tách biệt", example: "Keep them separate. (Hãy giữ chúng tách biệt.)", image: ""},
    {english: "serve", pronunciation: "/sɜrv/", type: "verb", vietnamese: "phục vụ", example: "He serves food in the restaurant. (Anh ấy phục vụ thức ăn trong nhà hàng.)", image: ""},
    {english: "set", pronunciation: "/sɛt/", type: "verb/noun", vietnamese: "đặt/bộ", example: "Set the table. (Dọn bàn ăn.)", image: ""},
    {english: "settle", pronunciation: "/ˈsɛtl/", type: "verb", vietnamese: "giải quyết", example: "Settle the dispute. (Giải quyết tranh chấp.)", image: ""},
    {english: "seven", pronunciation: "/ˈsɛvən/", type: "number", vietnamese: "bảy", example: "There are seven days in a week. (Có bảy ngày trong một tuần.)", image: ""},
    {english: "several", pronunciation: "/ˈsɛvrəl/", type: "determiner/pronoun", vietnamese: "một vài", example: "I have several friends. (Tôi có vài người bạn.)", image: ""},
    {english: "shall", pronunciation: "/ʃæl/", type: "modal verb", vietnamese: "sẽ (trong câu hỏi/gợi ý)", example: "Shall we go? (Chúng ta đi chứ?)"},
    {english: "shape", pronunciation: "/ʃeɪp/", type: "noun/verb", vietnamese: "hình dạng/tạo hình", example: "The box is square in shape. (Cái hộp có hình vuông.)", image: ""},
    {english: "share", pronunciation: "/ʃɛr/", type: "verb/noun", vietnamese: "chia sẻ", example: "Share your toys. (Chia sẻ đồ chơi của bạn.)", image: ""},
    {english: "sharp", pronunciation: "/ʃɑrp/", type: "adjective", vietnamese: "sắc/nhọn", example: "The knife is sharp. (Con dao sắc.)", image: ""},
    {english: "she", pronunciation: "/ʃi/", type: "pronoun", vietnamese: "cô ấy", example: "She is my sister. (Cô ấy là chị tôi.)", image: ""},
    {english: "sheet", pronunciation: "/ʃit/", type: "noun", vietnamese: "tờ/tấm", example: "A sheet of paper. (Một tờ giấy.)", image: ""},
    {english: "shell", pronunciation: "/ʃɛl/", type: "noun", vietnamese: "vỏ", example: "The snail has a shell. (Ốc sên có vỏ.)", image: ""},
    {english: "shine", pronunciation: "/ʃaɪn/", type: "verb", vietnamese: "chiếu sáng", example: "The sun shines brightly. (Mặt trời chiếu sáng rực rỡ.)", image: ""},
    {english: "ship", pronunciation: "/ʃɪp/", type: "noun", vietnamese: "con tàu", example: "The ship sails on the sea. (Con tàu đi trên biển.)", image: ""},
    {english: "shoe", pronunciation: "/ʃu/", type: "noun", vietnamese: "giày", example: "I need new shoes. (Tôi cần đôi giày mới.)", image: ""},
    {english: "shop", pronunciation: "/ʃɑp/", type: "noun/verb", vietnamese: "cửa hàng/mua sắm", example: "Let's go shopping. (Hãy đi mua sắm.)", image: ""},
    {english: "shore", pronunciation: "/ʃɔr/", type: "noun", vietnamese: "bờ biển", example: "Walk along the shore. (Đi dọc bờ biển.)", image: ""},
    {english: "short", pronunciation: "/ʃɔrt/", type: "adjective", vietnamese: "ngắn", example: "He has short hair. (Anh ấy có tóc ngắn.)", image: ""},
    {english: "should", pronunciation: "/ʃʊd/", type: "modal verb", vietnamese: "nên", example: "You should study hard. (Bạn nên học chăm chỉ.)", image: ""},
    {english: "shoulder", pronunciation: "/ˈʃoʊldər/", type: "noun", vietnamese: "vai", example: "He carried the bag on his shoulder. (Anh ấy vác túi trên vai.)", image: ""},
    {english: "shout", pronunciation: "/ʃaʊt/", type: "verb/noun", vietnamese: "hét/tiếng hét", example: "Don't shout. (Đừng hét.)", image: ""},
    {english: "show", pronunciation: "/ʃoʊ/", type: "verb/noun", vietnamese: "hiển thị/buổi biểu diễn", example: "Show me your photo. (Cho tôi xem ảnh của bạn.)", image: ""},
    {english: "side", pronunciation: "/saɪd/", type: "noun", vietnamese: "phía", example: "On the other side of the road. (Ở phía bên kia đường.)", image: ""},
    {english: "sight", pronunciation: "/saɪt/", type: "noun", vietnamese: "tầm nhìn/cảnh", example: "Her sight is excellent. (Thị lực của cô ấy rất tốt.)", image: ""},
    {english: "sign", pronunciation: "/saɪn/", type: "noun/verb", vietnamese: "dấu hiệu/ký", example: "Read the street sign. (Đọc biển báo đường.)", image: ""},
    {english: "silent", pronunciation: "/ˈsaɪlənt/", type: "adjective", vietnamese: "im lặng", example: "The room was silent. (Căn phòng im lặng.)", image: ""},
    {english: "silver", pronunciation: "/ˈsɪlvər/", type: "noun/adjective", vietnamese: "bạc/màu bạc", example: "She wears a silver ring. (Cô ấy đeo nhẫn bạc.)", image: ""},
    {english: "similar", pronunciation: "/ˈsɪmələr/", type: "adjective", vietnamese: "tương tự", example: "These two cars are similar. (Hai chiếc xe này tương tự nhau.)", image: ""},
    {english: "simple", pronunciation: "/ˈsɪmpəl/", type: "adjective", vietnamese: "đơn giản", example: "It's a simple question. (Đó là một câu hỏi đơn giản.)", image: ""},
    {english: "since", pronunciation: "/sɪns/", type: "preposition/conjunction", vietnamese: "kể từ khi", example: "I've been here since morning. (Tôi đã ở đây từ sáng.)", image: ""},
    {english: "sing", pronunciation: "/sɪŋ/", type: "verb", vietnamese: "hát", example: "She loves to sing. (Cô ấy thích hát.)", image: ""},
    {english: "single", pronunciation: "/ˈsɪŋɡəl/", type: "adjective", vietnamese: "đơn/độc thân", example: "He is a single man. (Anh ấy là một người đàn ông độc thân.)", image: ""},
    {english: "sister", pronunciation: "/ˈsɪstər/", type: "noun", vietnamese: "chị/em gái", example: "My sister is older than me. (Chị gái tôi lớn hơn tôi.)", image: ""},
    {english: "sit", pronunciation: "/sɪt/", type: "verb", vietnamese: "ngồi", example: "Sit down, please. (Xin mời ngồi.)", image: ""},
    {english: "six", pronunciation: "/sɪks/", type: "number", vietnamese: "sáu", example: "I have six books. (Tôi có sáu cuốn sách.)", image: ""},
    {english: "size", pronunciation: "/saɪz/", type: "noun", vietnamese: "kích thước", example: "What size is your shirt? (Áo của bạn cỡ nào?)"},
    {english: "skill", pronunciation: "/skɪl/", type: "noun", vietnamese: "kỹ năng", example: "He has excellent computer skills. (Anh ấy có kỹ năng máy tính xuất sắc.)", image: ""},
    {english: "skin", pronunciation: "/skɪn/", type: "noun", vietnamese: "da", example: "Protect your skin from the sun. (Bảo vệ da bạn khỏi ánh nắng mặt trời.)", image: ""},
    {english: "sky", pronunciation: "/skaɪ/", type: "noun", vietnamese: "bầu trời", example: "The sky is blue. (Bầu trời màu xanh.)", image: ""},
    {english: "slave", pronunciation: "/sleɪv/", type: "noun", vietnamese: "nô lệ", example: "He worked as a slave. (Anh ấy làm việc như một nô lệ.)", image: ""},
    {english: "sleep", pronunciation: "/slip/", type: "verb/noun", vietnamese: "ngủ/giấc ngủ", example: "I need to sleep. (Tôi cần ngủ.)", image: ""},
    {english: "slip", pronunciation: "/slɪp/", type: "verb", vietnamese: "trượt", example: "Be careful not to slip. (Cẩn thận đừng trượt.)", image: ""},
    {english: "slow", pronunciation: "/sloʊ/", type: "adjective", vietnamese: "chậm", example: "He is a slow learner. (Anh ấy là người học chậm.)", image: ""},
    {english: "small", pronunciation: "/smɔl/", type: "adjective", vietnamese: "nhỏ", example: "That's a small dog. (Đó là một con chó nhỏ.)", image: ""},
    {english: "smell", pronunciation: "/smɛl/", type: "verb/noun", vietnamese: "ngửi/mùi", example: "The flowers smell good. (Những bông hoa thơm.)", image: ""},
    {english: "smile", pronunciation: "/smaɪl/", type: "verb/noun", vietnamese: "cười/nụ cười", example: "She has a beautiful smile. (Cô ấy có một nụ cười đẹp.)", image: ""},
    {english: "snow", pronunciation: "/snoʊ/", type: "noun/verb", vietnamese: "tuyết/tuyết rơi", example: "It's snowing. (Trời đang tuyết rơi.)", image: ""},
    {english: "so", pronunciation: "/soʊ/", type: "adverb/conjunction", vietnamese: "vậy/vì vậy", example: "It's cold, so wear a coat. (Trời lạnh, vậy nên hãy mặc áo khoác.)", image: ""},
    {english: "soft", pronunciation: "/sɔft/", type: "adjective", vietnamese: "mềm", example: "The bed is very soft. (Cái giường rất mềm.)", image: ""},
    {english: "soil", pronunciation: "/sɔɪl/", type: "noun", vietnamese: "đất", example: "Plants grow in the soil. (Cây cối mọc trong đất.)", image: ""},
    {english: "soldier", pronunciation: "/ˈsoʊldʒər/", type: "noun", vietnamese: "người lính", example: "The soldier is brave. (Người lính dũng cảm.)", image: ""},
    {english: "solution", pronunciation: "/səˈluʃən/", type: "noun", vietnamese: "giải pháp", example: "We need a solution to this problem. (Chúng ta cần một giải pháp cho vấn đề này.)", image: ""},
    {english: "solve", pronunciation: "/sɑlv/", type: "verb", vietnamese: "giải quyết", example: "Solve the puzzle. (Giải câu đố.)", image: ""},
    {english: "some", pronunciation: "/sʌm/", type: "determiner/pronoun", vietnamese: "một vài", example: "I need some water. (Tôi cần một ít nước.)", image: ""},
    {english: "son", pronunciation: "/sʌn/", type: "noun", vietnamese: "con trai", example: "He has two sons. (Anh ấy có hai con trai.)", image: ""},
    {english: "song", pronunciation: "/sɔŋ/", type: "noun", vietnamese: "bài hát", example: "She sings a beautiful song. (Cô ấy hát một bài hát hay.)", image: ""},
    {english: "soon", pronunciation: "/sun/", type: "adverb", vietnamese: "sớm", example: "See you soon! (Gặp lại bạn sớm!)", image: ""},
    {english: "sound", pronunciation: "/saʊnd/", type: "noun/verb", vietnamese: "âm thanh/nghe", example: "I heard a strange sound. (Tôi nghe thấy một âm thanh lạ.)", image: ""},
    {english: "south", pronunciation: "/saʊθ/", type: "noun/adjective", vietnamese: "phía nam", example: "The wind comes from the south. (Gió đến từ phía nam.)", image: ""},
    {english: "space", pronunciation: "/speɪs/", type: "noun", vietnamese: "không gian", example: "There's not much space here. (Không có nhiều không gian ở đây.)", image: ""},
    {english: "speak", pronunciation: "/spik/", type: "verb", vietnamese: "nói", example: "Can you speak English? (Bạn có thể nói tiếng Anh không?)", image: ""},
    {english: "special", pronunciation: "/ˈspɛʃəl/", type: "adjective", vietnamese: "đặc biệt", example: "This is a special occasion. (Đây là một dịp đặc biệt.)", image: ""},
    {english: "speech", pronunciation: "/spitʃ/", type: "noun", vietnamese: "bài nói/diễn văn", example: "He gave a long speech. (Anh ấy đã có một bài nói dài.)", image: ""},
    {english: "speed", pronunciation: "/spid/", type: "noun", vietnamese: "tốc độ", example: "The car reached high speed. (Xe hơi đạt tốc độ cao.)", image: ""},
    {english: "spell", pronunciation: "/spɛl/", type: "verb", vietnamese: "đánh vần", example: "How do you spell your name? (Bạn đánh vần tên của bạn như thế nào?)"},
    {english: "spend", pronunciation: "/spɛnd/", type: "verb", vietnamese: "chi tiêu/dành thời gian", example: "I spend money on books. (Tôi chi tiền vào sách.)", image: ""},
    {english: "spoke", pronunciation: "/spoʊk/", type: "verb", vietnamese: "đã nói (quá khứ của speak)", example: "He spoke to me yesterday. (Anh ấy đã nói chuyện với tôi hôm qua.)", image: ""},
    {english: "spot", pronunciation: "/spɑt/", type: "noun", vietnamese: "vị trí/vết", example: "There's a red spot on his shirt. (Có một vết đỏ trên áo sơ mi của anh ấy.)", image: ""},
    {english: "spread", pronunciation: "/sprɛd/", type: "verb", vietnamese: "lan truyền", example: "The news spread quickly. (Tin tức lan truyền nhanh chóng.)", image: ""},
    {english: "spring", pronunciation: "/sprɪŋ/", type: "noun", vietnamese: "mùa xuân", example: "Flowers bloom in spring. (Hoa nở vào mùa xuân.)", image: ""},
    {english: "square", pronunciation: "/skwɛr/", type: "noun/adjective", vietnamese: "hình vuông/vuông", example: "Draw a square. (Vẽ một hình vuông.)", image: ""},
    {english: "stand", pronunciation: "/stænd/", type: "verb", vietnamese: "đứng", example: "Stand up, please. (Xin mời đứng lên.)", image: ""},
    {english: "star", pronunciation: "/stɑr/", type: "noun", vietnamese: "ngôi sao", example: "Look at the stars. (Nhìn những vì sao.)", image: ""},
    {english: "start", pronunciation: "/stɑrt/", type: "verb/noun", vietnamese: "bắt đầu", example: "Let's start the game. (Hãy bắt đầu trò chơi.)", image: ""},
    {english: "state", pronunciation: "/steɪt/", type: "noun/verb", vietnamese: "bang/tuyên bố", example: "New York is a state. (New York là một bang.)", image: ""},
    {english: "station", pronunciation: "/ˈsteɪʃən/", type: "noun", vietnamese: "nhà ga", example: "I'll meet you at the station. (Tôi sẽ gặp bạn tại nhà ga.)", image: ""},
    {english: "stay", pronunciation: "/steɪ/", type: "verb", vietnamese: "ở lại", example: "Stay here. (Hãy ở lại đây.)", image: ""},
    {english: "stead", pronunciation: "/stɛd/", type: "noun", vietnamese: "thay thế (trong cụm từ)", example: "In his stead, I will go. (Thay thế anh ấy, tôi sẽ đi.)", image: ""},
    {english: "steam", pronunciation: "/stim/", type: "noun", vietnamese: "hơi nước", example: "Steam comes out of the kettle. (Hơi nước bốc ra từ ấm đun nước.)", image: ""},
    {english: "steel", pronunciation: "/stil/", type: "noun", vietnamese: "thép", example: "This knife is made of steel. (Con dao này làm bằng thép.)", image: ""},
    {english: "step", pronunciation: "/stɛp/", type: "noun/verb", vietnamese: "bước/bước đi", example: "Take a step forward. (Bước một bước về phía trước.)", image: ""},
    {english: "stick", pronunciation: "/stɪk/", type: "noun/verb", vietnamese: "cây gậy/dính", example: "The children played with sticks. (Những đứa trẻ chơi với gậy.)", image: ""},
    {english: "still", pronunciation: "/stɪl/", type: "adverb", vietnamese: "vẫn", example: "He is still sleeping. (Anh ấy vẫn đang ngủ.)", image: ""},
    {english: "stone", pronunciation: "/stoʊn/", type: "noun", vietnamese: "đá", example: "The wall is made of stone. (Bức tường làm bằng đá.)", image: ""},
    {english: "stood", pronunciation: "/stʊd/", type: "verb", vietnamese: "đã đứng (quá khứ của stand)", example: "He stood by the window. (Anh ấy đã đứng cạnh cửa sổ.)", image: ""},
    {english: "stop", pronunciation: "/stɑp/", type: "verb/noun", vietnamese: "dừng", example: "Stop here. (Dừng ở đây.)", image: ""},
    {english: "store", pronunciation: "/stɔr/", type: "noun/verb", vietnamese: "cửa hàng/lưu trữ", example: "I bought it at the store. (Tôi mua nó ở cửa hàng.)", image: ""},
    {english: "story", pronunciation: "/ˈstɔri/", type: "noun", vietnamese: "câu chuyện", example: "Tell me a story. (Kể cho tôi một câu chuyện.)", image: ""},
    {english: "straight", pronunciation: "/streɪt/", type: "adjective/adverb", vietnamese: "thẳng", example: "Go straight ahead. (Đi thẳng về phía trước.)", image: ""},
    {english: "strange", pronunciation: "/streɪndʒ/", type: "adjective", vietnamese: "lạ", example: "That's a strange idea. (Đó là một ý tưởng lạ.)", image: ""},
    {english: "stream", pronunciation: "/strim/", type: "noun", vietnamese: "dòng suối", example: "The water flows in the stream. (Nước chảy trong dòng suối.)", image: ""},
    {english: "street", pronunciation: "/strit/", type: "noun", vietnamese: "đường phố", example: "Walk along the street. (Đi dọc đường phố.)", image: ""},
    {english: "stretch", pronunciation: "/strɛtʃ/", type: "verb", vietnamese: "kéo giãn", example: "Stretch your arms. (Kéo giãn tay.)", image: ""},
    {english: "string", pronunciation: "/strɪŋ/", type: "noun", vietnamese: "sợi dây", example: "Tie it with a string. (Buộc nó bằng một sợi dây.)", image: ""},
    {english: "strong", pronunciation: "/strɔŋ/", type: "adjective", vietnamese: "mạnh", example: "He is strong. (Anh ấy khỏe.)", image: ""},
    {english: "student", pronunciation: "/ˈstudənt/", type: "noun", vietnamese: "học sinh/sinh viên", example: "I am a student. (Tôi là học sinh.)", image: ""},
    {english: "study", pronunciation: "/ˈstʌdi/", type: "verb/noun", vietnamese: "học/sự học", example: "Study hard for the exam. (Học chăm chỉ cho kỳ thi.)", image: ""},
    {english: "subject", pronunciation: "/ˈsʌbdʒɪkt/", type: "noun", vietnamese: "môn học/chủ đề", example: "My favorite subject is math. (Môn học yêu thích của tôi là toán.)", image: ""},
    {english: "substance", pronunciation: "/ˈsʌbstəns/", type: "noun", vietnamese: "chất", example: "Water is a clear substance. (Nước là một chất trong suốt.)", image: ""},
    {english: "subtract", pronunciation: "/səbˈtrækt/", type: "verb", vietnamese: "trừ (toán học)", example: "Subtract 5 from 10. (Trừ 5 khỏi 10.)", image: ""},
    {english: "success", pronunciation: "/səkˈsɛs/", type: "noun", vietnamese: "thành công", example: "Hard work leads to success. (Làm việc chăm chỉ dẫn đến thành công.)", image: ""},
    {english: "such", pronunciation: "/sʌtʃ/", type: "determiner/pronoun", vietnamese: "như vậy", example: "It was such a beautiful day. (Đó là một ngày thật đẹp.)", image: ""},
    {english: "sudden", pronunciation: "/ˈsʌdən/", type: "adjective", vietnamese: "đột ngột", example: "A sudden noise. (Một tiếng ồn đột ngột.)", image: ""},
    {english: "suffix", pronunciation: "/ˈsʌfɪks/", type: "noun", vietnamese: "hậu tố", example: "-ing is a common suffix. (-ing là một hậu tố phổ biến.)", image: ""},
    {english: "sugar", pronunciation: "/ˈʃʊɡər/", type: "noun", vietnamese: "đường", example: "Add sugar to your coffee. (Thêm đường vào cà phê của bạn.)", image: ""},
    {english: "suggest", pronunciation: "/səˈdʒɛst/", type: "verb", vietnamese: "đề xuất", example: "I suggest we go home. (Tôi đề xuất chúng ta về nhà.)", image: ""},
    {english: "suit", pronunciation: "/sut/", type: "noun/verb", vietnamese: "bộ com lê/phù hợp", example: "He wore a business suit. (Anh ấy mặc một bộ com lê công sở.)", image: ""},
    {english: "summer", pronunciation: "/ˈsʌmər/", type: "noun", vietnamese: "mùa hè", example: "I love summer. (Tôi yêu mùa hè.)", image: ""},
    {english: "sun", pronunciation: "/sʌn/", type: "noun", vietnamese: "mặt trời", example: "The sun is shining. (Mặt trời đang chiếu sáng.)", image: ""},
    {english: "supply", pronunciation: "/səˈplaɪ/", type: "noun/verb", vietnamese: "cung cấp", example: "The supply of water is low. (Nguồn cung cấp nước thấp.)", image: ""},
    {english: "support", pronunciation: "/səˈpɔrt/", type: "noun/verb", vietnamese: "hỗ trợ/ủng hộ", example: "I support your decision. (Tôi ủng hộ quyết định của bạn.)", image: ""},
    {english: "sure", pronunciation: "/ʃʊr/", type: "adjective", vietnamese: "chắc chắn", example: "Are you sure? (Bạn có chắc không?)"},
    {english: "surface", pronunciation: "/ˈsɜrfɪs/", type: "noun", vietnamese: "bề mặt", example: "The surface of the table is smooth. (Bề mặt của cái bàn nhẵn.)", image: ""},
    {english: "surprise", pronunciation: "/sərˈpraɪz/", type: "noun/verb", vietnamese: "ngạc nhiên", example: "It was a big surprise. (Đó là một bất ngờ lớn.)", image: ""},
    {english: "swim", pronunciation: "/swɪm/", type: "verb", vietnamese: "bơi", example: "I can swim. (Tôi có thể bơi.)", image: ""},
    {english: "syllable", pronunciation: "/ˈsɪləbəl/", type: "noun", vietnamese: "âm tiết", example: "Happy has two syllables. (Happy có hai âm tiết.)", image: ""},
    {english: "symbol", pronunciation: "/ˈsɪmbəl/", type: "noun", vietnamese: "biểu tượng", example: "The dove is a symbol of peace. (Chim bồ câu là biểu tượng của hòa bình.)", image: ""},
    {english: "system", pronunciation: "/ˈsɪstəm/", type: "noun", vietnamese: "hệ thống", example: "The computer system is down. (Hệ thống máy tính bị lỗi.)", image: ""},

    // T (50 từ)
    {english: "table", pronunciation: "/ˈteɪbəl/", type: "noun", vietnamese: "bàn", example: "The table is made of wood. (Cái bàn làm bằng gỗ.)", image: ""},
    {english: "table", pronunciation: "/ˈteɪ.bl̩/", type: "noun", vietnamese: "cái bàn", example: "We sat at the table for dinner. (Chúng tôi ngồi vào bàn ăn tối.)", image: ""},
    {english: "tail", pronunciation: "/teɪl/", type: "noun", vietnamese: "đuôi, đoạn cuối", example: "The dog wagged its tail. (Con chó vẫy đuôi.)", image: ""},
    {english: "take", pronunciation: "/teɪk/", type: "verb", vietnamese: "cầm, nắm, lấy", example: "Please take a seat. (Xin mời ngồi.)", image: ""},
    {english: "talk", pronunciation: "/tɔːk/", type: "verb/noun", vietnamese: "nói chuyện, trò chuyện; cuộc trò chuyện, cuộc thảo luận", example: "Let's talk about it. (Chúng ta hãy nói về nó.)", image: ""},
    {english: "tall", pronunciation: "/tɔːl/", type: "adjective", vietnamese: "cao", example: "He is a tall man. (Anh ấy là một người đàn ông cao.)", image: ""},
    {english: "teach", pronunciation: "/tiːtʃ/", type: "verb", vietnamese: "dạy", example: "She teaches English. (Cô ấy dạy tiếng Anh.)", image: ""},
    {english: "team", pronunciation: "/tiːm/", type: "noun", vietnamese: "đội, nhóm", example: "Our team won the game. (Đội của chúng tôi đã thắng trận đấu.)", image: ""},
    {english: "teeth", pronunciation: "/tiːθ/", type: "noun", vietnamese: "răng", example: "Brush your teeth twice a day. (Đánh răng hai lần một ngày.)", image: ""},
    {english: "tell", pronunciation: "/tel/", type: "verb", vietnamese: "nói, nói với", example: "Please tell me the truth. (Xin hãy nói cho tôi sự thật.)", image: ""},
    {english: "temperature", pronunciation: "/ˈtem.prə.tʃər/", type: "noun", vietnamese: "nhiệt độ", example: "The temperature dropped suddenly. (Nhiệt độ giảm đột ngột.)", image: ""},
    {english: "ten", pronunciation: "/ten/", type: "number", vietnamese: "mười, chục", example: "I have ten fingers. (Tôi có mười ngón tay.)", image: ""},
    {english: "term", pronunciation: "/tɜːm/", type: "noun", vietnamese: "giới hạn, kỳ hạn, khóa, kỳ học", example: "The school term ends next month. (Kỳ học kết thúc vào tháng tới.)", image: ""},
    {english: "test", pronunciation: "/test/", type: "noun/verb", vietnamese: "bài kiểm tra, sự thử nghiệm, xét nghiệm; kiểm tra, xét nghiệm, thử nghiệm", example: "I have a math test tomorrow. (Tôi có bài kiểm tra toán vào ngày mai.)", image: ""},
    {english: "than", pronunciation: "/ðæn/", type: "preposition/conjunction", vietnamese: "hơn", example: "She is taller than me. (Cô ấy cao hơn tôi.)", image: ""},
    {english: "thank", pronunciation: "/θæŋk/", type: "verb", vietnamese: "cám ơn", example: "I want to thank you for your help. (Tôi muốn cảm ơn sự giúp đỡ của bạn.)", image: ""},
    {english: "that", pronunciation: "/ðæt/", type: "determiner/pronoun/conjunction", vietnamese: "người ấy, đó, vật ấy, đó; rằng, là", example: "That is my car. (Đó là xe của tôi.)", image: ""},
    {english: "the", pronunciation: "/ðiː/", type: "article", vietnamese: "cái, con, người…", example: "The sun is shining. (Mặt trời đang chiếu sáng.)", image: ""},
    {english: "their", pronunciation: "/ðeər/", type: "determiner", vietnamese: "của chúng, của chúng nó, của họ", example: "This is their house. (Đây là nhà của họ.)", image: ""},
    {english: "them", pronunciation: "/ðem/", type: "pronoun", vietnamese: "chúng, chúng nó, họ", example: "I saw them at the park. (Tôi đã gặp họ ở công viên.)", image: ""},
    {english: "then", pronunciation: "/ðen/", type: "adverb", vietnamese: "khi đó, lúc đó, tiếp đó", example: "I'll finish my work, and then I'll go home. (Tôi sẽ hoàn thành công việc, và sau đó tôi sẽ về nhà.)", image: ""},
    {english: "there", pronunciation: "/ðeər/", type: "adverb", vietnamese: "ở nơi đó, tại nơi đó", example: "Put the book over there. (Đặt cuốn sách ở đằng kia.)", image: ""},
    {english: "these", pronunciation: "/ðiːz/", type: "determiner", vietnamese: "này", example: "These are my friends. (Đây là những người bạn của tôi.)", image: ""},
    {english: "they", pronunciation: "/ðeɪ/", type: "pronoun", vietnamese: "chúng, chúng nó, họ; những cái ấy", example: "They are playing football. (Họ đang chơi bóng đá.)", image: ""},
    {english: "thick", pronunciation: "/θɪk/", type: "adjective", vietnamese: "dày; đậm", example: "The book has a thick cover. (Cuốn sách có bìa dày.)", image: ""},
    {english: "thin", pronunciation: "/θɪn/", type: "adjective", vietnamese: "mỏng, mảnh", example: "She is very thin. (Cô ấy rất gầy.)", image: ""},
    {english: "thing", pronunciation: "/θɪŋ/", type: "noun", vietnamese: "cái, đồ, vật", example: "What's that thing? (Cái vật kia là gì?)", image: ""},
    {english: "think", pronunciation: "/θɪŋk/", type: "verb", vietnamese: "nghĩ, suy nghĩ", example: "I think you're right. (Tôi nghĩ bạn đúng.)", image: ""},
    {english: "third", pronunciation: "/θɜːd/", type: "number", vietnamese: "thứ ba", example: "This is my third attempt. (Đây là lần thử thứ ba của tôi.)", image: ""},
    {english: "this", pronunciation: "/ðɪs/", type: "determiner/pronoun", vietnamese: "cái này, điều này, việc này", example: "This is my phone. (Đây là điện thoại của tôi.)", image: ""},
    {english: "those", pronunciation: "/ðəʊz/", type: "determiner", vietnamese: "Những, cái đó", example: "Those are beautiful flowers. (Những bông hoa kia đẹp quá.)", image: ""},
    {english: "though", pronunciation: "/ðəʊ/", type: "conjunction/adverb", vietnamese: "dù, dù cho, mặc dù; mặc dù, tuy nhiên, tuy vậy", example: "Though it was raining, we went out. (Mặc dù trời mưa, chúng tôi vẫn ra ngoài.)", image: ""},
    {english: "thought", pronunciation: "/θɔːt/", type: "noun", vietnamese: "sự suy nghĩ, khả năng suy nghĩ; ý nghĩ, tư tưởng, tư duy", example: "He shared his deepest thoughts. (Anh ấy chia sẻ những suy nghĩ sâu sắc nhất của mình.)", image: ""},
    {english: "thousand", pronunciation: "/ˈθaʊ.zənd/", type: "number", vietnamese: "nghìn", example: "There are a thousand stars in the sky. (Có hàng nghìn ngôi sao trên bầu trời.)", image: ""},
    {english: "three", pronunciation: "/θriː/", type: "number", vietnamese: "ba", example: "I have three books. (Tôi có ba cuốn sách.)", image: ""},
    {english: "through", pronunciation: "/θruː/", type: "preposition/adverb", vietnamese: "qua, xuyên qua", example: "We walked through the forest. (Chúng tôi đi xuyên qua rừng.)", image: ""},
    {english: "throw", pronunciation: "/θrəʊ/", type: "verb", vietnamese: "ném, vứt, quăng", example: "Don't throw trash on the ground. (Đừng vứt rác xuống đất.)", image: ""},
    {english: "thus", pronunciation: "/ðʌs/", type: "adverb", vietnamese: "như vậy, như thế, do đó", example: "He was ill, thus he couldn't come. (Anh ấy bị ốm, do đó anh ấy không thể đến.)", image: ""},
    {english: "tie", pronunciation: "/taɪ/", type: "verb/noun", vietnamese: "buộc, cột, trói; dây buộc, dây trói, dây giày", example: "Tie your shoelaces. (Buộc dây giày của bạn.)", image: ""},
    {english: "time", pronunciation: "/taɪm/", type: "noun", vietnamese: "thời gian, thì giờ", example: "What time is it? (Bây giờ là mấy giờ?)", image: ""},
    {english: "tiny", pronunciation: "/ˈtaɪ.ni/", type: "adjective", vietnamese: "rất nhỏ, nhỏ xíu", example: "The baby has tiny fingers. (Em bé có những ngón tay nhỏ xíu.)", image: ""},
    {english: "tire", pronunciation: "/taɪər/", type: "verb", vietnamese: "làm mệt mỏi, trở nên mệt nhọc", example: "The long journey will tire you out. (Chuyến đi dài sẽ làm bạn mệt mỏi.)", image: ""},
    {english: "to", pronunciation: "/tuː/", type: "preposition", vietnamese: "theo hướng, tới", example: "I'm going to the park. (Tôi đang đi đến công viên.)", image: ""},
    {english: "together", pronunciation: "/təˈɡeð.ər/", type: "adverb", vietnamese: "cùng nhau, cùng với", example: "Let's work together. (Hãy cùng làm việc.)", image: ""},
    {english: "told", pronunciation: "/təʊld/", type: "verb", vietnamese: "nói, nói với, nói lên, nói ra", example: "She told me a secret. (Cô ấy đã kể cho tôi một bí mật.)", image: ""},
    {english: "tone", pronunciation: "/təʊn/", type: "noun", vietnamese: "tiếng, giọng", example: "Her voice has a gentle tone. (Giọng cô ấy có một tông điệu nhẹ nhàng.)", image: ""},
    {english: "too", pronunciation: "/tuː/", type: "adverb", vietnamese: "cũng", example: "I like pizza, too. (Tôi cũng thích pizza.)", image: ""},
    {english: "took", pronunciation: "/tʊk/", type: "verb", vietnamese: "sự cầm, sự nắm, sự lấy", example: "He took my hand. (Anh ấy đã nắm tay tôi.)", image: ""},
    {english: "tool", pronunciation: "/tuːl/", type: "noun", vietnamese: "dụng cụ, đồ dùng", example: "A hammer is a useful tool. (Cái búa là một dụng cụ hữu ích.)", image: ""},
    {english: "top", pronunciation: "/tɒp/", type: "noun/adjective", vietnamese: "chóp, đỉnh; đứng đầu, trên hết", example: "The book is on top of the shelf. (Cuốn sách ở trên đỉnh kệ.)", image: ""},
    {english: "total", pronunciation: "/ˈtəʊ.təl/", type: "adjective/noun", vietnamese: "tổng cộng, toàn bộ; tổng số, toàn bộ số lượng", example: "What's the total cost? (Tổng chi phí là bao nhiêu?)", image: ""},
    {english: "touch", pronunciation: "/tʌtʃ/", type: "verb/noun", vietnamese: "sờ, mó, tiếp xúc; sự sờ, sự mó, sự tiếp xúc", example: "Don't touch the wet paint. (Đừng chạm vào sơn ướt.)", image: ""},
    {english: "toward", pronunciation: "/təˈwɔ:dz/", type: "preposition", vietnamese: "về phía, hướng về", example: "He walked toward the door. (Anh ấy đi về phía cửa.)", image: ""},
    {english: "town", pronunciation: "/taʊn/", type: "noun", vietnamese: "thị trấn, thị xã, thành phố nhỏ", example: "I live in a small town. (Tôi sống ở một thị trấn nhỏ.)", image: ""},
    {english: "track", pronunciation: "/træk/", type: "noun", vietnamese: "phần của đĩa; đường mòn, đường đua", example: "The train runs on the tracks. (Tàu chạy trên đường ray.)", image: ""},
    {english: "trade", pronunciation: "/treɪd/", type: "noun/verb", vietnamese: "thương mại, buôn bán; buôn bán, trao đổi", example: "International trade is important. (Thương mại quốc tế rất quan trọng.)", image: ""},
    {english: "train", pronunciation: "/treɪn/", type: "noun/verb", vietnamese: "xe lửa, tàu hỏa; dạy, rèn luyện, đào tạo", example: "I take the train to work. (Tôi đi tàu hỏa đi làm.)", image: ""},
    {english: "travel", pronunciation: "/ˈtræv.əl/", type: "verb", vietnamese: "đi lại, đi du lịch, di chuyển; sự đi, những chuyến đi", example: "I love to travel around the world. (Tôi thích đi du lịch vòng quanh thế giới.)", image: ""},
    {english: "tree", pronunciation: "/triː/", type: "noun", vietnamese: "cây", example: "The bird built a nest in the tree. (Con chim làm tổ trên cây.)", image: ""},
    {english: "triangle", pronunciation: "/ˈtraɪ.æŋ.ɡl̩/", type: "noun", vietnamese: "hình tam giác", example: "A triangle has three sides. (Hình tam giác có ba cạnh.)", image: ""},
    {english: "trip", pronunciation: "/trɪp/", type: "noun/verb", vietnamese: "cuộc dạo chơi, cuộc du ngoạn; đi dạo, du ngoạn", example: "We went on a short trip to the beach. (Chúng tôi đã có một chuyến đi ngắn đến bãi biển.)", image: ""},
    {english: "trouble", pronunciation: "/ˈtrʌb.l̩/", type: "noun", vietnamese: "điều lo lắng, điều muộn phiền", example: "He's having some trouble with his car. (Anh ấy đang gặp một số rắc rối với chiếc xe của mình.)", image: ""},
    {english: "truck", pronunciation: "/trʌk/", type: "noun", vietnamese: "xe tải", example: "The truck carried a heavy load. (Chiếc xe tải chở một khối lượng lớn.)", image: ""},
    {english: "true", pronunciation: "/truː/", type: "adjective", vietnamese: "đúng, thật", example: "Is that true? (Điều đó có thật không?)", image: ""},
    {english: "try", pronunciation: "/traɪ/", type: "verb", vietnamese: "thử, cố gắng", example: "Try your best. (Cố gắng hết sức mình.)", image: ""},
    {english: "tube", pronunciation: "/tjuːb/", type: "noun", vietnamese: "ống, tuýp", example: "A tube of toothpaste. (Một tuýp kem đánh răng.)", image: ""},
    {english: "turn", pronunciation: "/tɜːn/", type: "verb/noun", vietnamese: "quay, xoay, vặn; sự quay, vòng quay", example: "Turn left at the next corner. (Rẽ trái ở góc tiếp theo.)", image: ""},
    {english: "twenty", pronunciation: "/ˈtwen.ti/", type: "number", vietnamese: "hai mươi", example: "I have twenty dollars. (Tôi có hai mươi đô la.)", image: ""},
    {english: "two", pronunciation: "/tuː/", type: "number", vietnamese: "hai, đôi", example: "I have two brothers. (Tôi có hai anh trai.)", image: ""},
    {english: "type", pronunciation: "/taɪp/", type: "noun/verb", vietnamese: "loại, kiểu, mẫu; phân loại, xếp loại", example: "What type of music do you like? (Bạn thích loại nhạc nào?)", image: ""},

    //U
    {english: "under", pronunciation: "/ˈʌn.dər/", type: "preposition/adverb", vietnamese: "dưới, ở dưới; ở phía dưới, về phía dưới", example: "The cat is under the table. (Con mèo ở dưới bàn.)", image: ""},
    {english: "unit", pronunciation: "/ˈjuː.nɪt/", type: "noun", vietnamese: "đơn vị", example: "Centimeter is a unit of length. (Centimet là một đơn vị đo chiều dài.)", image: ""},
    {english: "until", pronunciation: "/ənˈtɪl/", type: "conjunction/preposition", vietnamese: "trước khi, cho đến khi", example: "I'll wait until you come. (Tôi sẽ đợi cho đến khi bạn đến.)", image: ""},
    {english: "up", pronunciation: "/ʌp/", type: "adverb/preposition", vietnamese: "ở trên, lên trên, lên", example: "Look up at the sky. (Nhìn lên bầu trời.)", image: ""},
    {english: "us", pronunciation: "/ʌs/", type: "pronoun", vietnamese: "chúng tôi, chúng ta; tôi và anh", example: "He joined us for dinner. (Anh ấy đã tham gia ăn tối cùng chúng tôi.)", image: ""},
    {english: "use", pronunciation: "/juːz/", type: "verb/noun", vietnamese: "sử dụng, dùng; sự dùng, sự sử dụng", example: "Can I use your pen? (Tôi có thể dùng bút của bạn không?)", image: ""},
    {english: "usual", pronunciation: "/ˈjuː.ʒu.əl/", type: "adjective", vietnamese: "thông thường, thường dùng", example: "It's my usual routine. (Đó là thói quen thông thường của tôi.)", image: ""},
    {english: "valley", pronunciation: "/ˈvæl.i/", type: "noun", vietnamese: "thung lũng", example: "The village is located in a beautiful valley. (Ngôi làng nằm trong một thung lũng đẹp.)", image: ""},
    {english: "value", pronunciation: "/ˈvæl.juː/", type: "noun/verb", vietnamese: "giá trị, ước tính, định giá", example: "The painting has great historical value. (Bức tranh có giá trị lịch sử lớn.)", image: ""},
    {english: "vary", pronunciation: "/ˈveə.ri/", type: "verb", vietnamese: "thay đổi, làm cho khác nhau, biến đổi", example: "Prices may vary depending on the season. (Giá cả có thể thay đổi tùy thuộc vào mùa.)", image: ""},
    {english: "verb", pronunciation: "/vɜːb/", type: "noun", vietnamese: "động từ", example: "Run is a verb. (Run là một động từ.)", image: ""},
    {english: "very", pronunciation: "/ˈver.i/", type: "adverb", vietnamese: "rất, lắm", example: "She is very kind. (Cô ấy rất tốt bụng.)", image: ""},
    {english: "view", pronunciation: "/vjuː/", type: "noun/verb", vietnamese: "sự nhìn, tầm nhìn; nhìn thấy, xem, quan sát", example: "The room has a great view of the city. (Căn phòng có tầm nhìn tuyệt đẹp ra thành phố.)", image: ""},
    {english: "village", pronunciation: "/ˈvɪl.ɪdʒ/", type: "noun", vietnamese: "làng, xã", example: "He grew up in a small village. (Anh ấy lớn lên ở một ngôi làng nhỏ.)", image: ""},
    {english: "visit", pronunciation: "/ˈvɪz.ɪt/", type: "verb/noun", vietnamese: "đi thăm hỏi, đến chơi, tham quan; sự đi thăm, sự thăm viếng", example: "I will visit my grandparents next week. (Tôi sẽ thăm ông bà vào tuần tới.)", image: ""},
    {english: "voice", pronunciation: "/vɔɪs/", type: "noun", vietnamese: "tiếng, giọng nói", example: "She has a beautiful singing voice. (Cô ấy có giọng hát rất hay.)", image: ""},
    {english: "vowel", pronunciation: "/vaʊəl/", type: "noun", vietnamese: "nguyên âm", example: "A, E, I, O, U are vowels. (A, E, I, O, U là các nguyên âm.)", image: ""},
    {english: "wait", pronunciation: "/weɪt/", type: "verb", vietnamese: "chờ đợi", example: "Please wait for me. (Làm ơn đợi tôi.)", image: ""},
    {english: "walk", pronunciation: "/wɔːk/", type: "verb/noun", vietnamese: "đi, đi bộ; sự đi bộ, sự đi dạo", example: "Let's go for a walk. (Hãy đi dạo.)", image: ""},
    {english: "wall", pronunciation: "/wɔːl/", type: "noun", vietnamese: "tường, vách", example: "Hang the picture on the wall. (Treo bức tranh lên tường.)", image: ""},
    {english: "want", pronunciation: "/wɒnt/", type: "verb", vietnamese: "muốn", example: "I want to learn French. (Tôi muốn học tiếng Pháp.)", image: ""},
    {english: "war", pronunciation: "/wɔːr/", type: "noun", vietnamese: "chiến tranh", example: "The country was at war. (Đất nước đang trong tình trạng chiến tranh.)", image: ""},
    {english: "warm", pronunciation: "/wɔːm/", type: "adjective/verb", vietnamese: "ấm, ấm áp; làm cho nóng, hâm nóng", example: "Wear a warm coat. (Mặc một chiếc áo khoác ấm.)", image: ""},
    {english: "was", pronunciation: "/wɒz/", type: "verb", vietnamese: "thì, là", example: "He was happy. (Anh ấy đã hạnh phúc.)", image: ""},
    {english: "wash", pronunciation: "/wɒʃ/", type: "verb", vietnamese: "rửa, giặt", example: "Please wash your hands. (Xin hãy rửa tay.)", image: ""},
    {english: "watch", pronunciation: "/wɒtʃ/", type: "verb/noun", vietnamese: "nhìn, theo dõi, quan sát; sự canh gác, sự canh phòng", example: "Let's watch a movie. (Chúng ta hãy xem phim.)", image: ""},
    {english: "water", pronunciation: "/ˈwɔː.tər/", type: "noun", vietnamese: "nước", example: "Drink plenty of water. (Uống nhiều nước.)", image: ""},
    {english: "wave", pronunciation: "/weɪv/", type: "noun", vietnamese: "sóng, gợn nước; gợn sóng, uốn thành sóng", example: "The waves crashed on the shore. (Những con sóng vỗ vào bờ.)", image: ""},
    {english: "way", pronunciation: "/ˈweɪ/", type: "noun", vietnamese: "đường, đường đi", example: "Which way should we go? (Chúng ta nên đi đường nào?)", image: ""},
    {english: "we", pronunciation: "/wiː/", type: "pronoun", vietnamese: "chúng tôi, chúng ta", example: "We are friends. (Chúng tôi là bạn bè.)", image: ""},
    {english: "wear", pronunciation: "/weər/", type: "verb", vietnamese: "mặc, mang, đeo", example: "She likes to wear dresses. (Cô ấy thích mặc váy.)", image: ""},
    {english: "weather", pronunciation: "/ˈwɛð.ər/", type: "noun", vietnamese: "thời tiết", example: "The weather is good today. (Thời tiết hôm nay tốt.)", image: ""},
    {english: "week", pronunciation: "/wiːk/", type: "noun", vietnamese: "tuần, tuần lễ", example: "There are seven days in a week. (Có bảy ngày trong một tuần.)", image: ""},
    {english: "weight", pronunciation: "/weɪt/", type: "noun", vietnamese: "trọng lượng", example: "What's your weight? (Cân nặng của bạn là bao nhiêu?)", image: ""},
    {english: "well", pronunciation: "/wel/", type: "adverb/adjective", vietnamese: "tốt, giỏi; ôi, may quá!", example: "He sings well. (Anh ấy hát hay.)", image: ""},
    {english: "went", pronunciation: "/went/", type: "verb", vietnamese: "đi", example: "I went to the store yesterday. (Tôi đã đi cửa hàng ngày hôm qua.)", image: ""},
    {english: "were", pronunciation: "/wɜːr/", type: "verb", vietnamese: "thì, là", example: "They were happy. (Họ đã hạnh phúc.)", image: ""},
    {english: "west", pronunciation: "/west/", type: "noun/adjective/adverb", vietnamese: "phía Tây, theo phía tây, về hướng tây", example: "The sun sets in the west. (Mặt trời lặn ở phía tây.)", image: ""},
    {english: "what", pronunciation: "/wɒt/", type: "pronoun/determiner", vietnamese: "gì, thế nào", example: "What is your name? (Tên bạn là gì?)", image: ""},
    {english: "wheel", pronunciation: "/wiːl/", type: "noun", vietnamese: "bánh xe", example: "The car has four wheels. (Xe hơi có bốn bánh.)", image: ""},
    {english: "when", pronunciation: "/wen/", type: "adverb/pronoun/conjunction", vietnamese: "khi, lúc, vào lúc nào", example: "When will you arrive? (Khi nào bạn đến?)", image: ""},
    {english: "where", pronunciation: "/weər/", type: "adverb/conjunction", vietnamese: "đâu, ở đâu; nơi mà", example: "Where are you going? (Bạn đang đi đâu?)", image: ""},
    {english: "whether", pronunciation: "/ˈwɛð.ər/", type: "conjunction", vietnamese: "có..không; có… chăng; không biết có.. không", example: "I don't know whether he will come or not. (Tôi không biết liệu anh ấy có đến hay không.)", image: ""},
    {english: "which", pronunciation: "/wɪtʃ/", type: "pronoun/determiner", vietnamese: "nào, bất cứ.. nào; ấy, đó", example: "Which book do you want? (Bạn muốn cuốn sách nào?)", image: ""},
    {english: "while", pronunciation: "/waɪl/", type: "conjunction/noun", vietnamese: "trong lúc, trong khi; lúc, chốc, lát", example: "While I was sleeping, he cooked dinner. (Trong khi tôi đang ngủ, anh ấy đã nấu bữa tối.)", image: ""},
    {english: "white", pronunciation: "/waɪt/", type: "adjective/noun", vietnamese: "trắng; màu trắng", example: "The clouds are white. (Những đám mây màu trắng.)", image: ""},
    {english: "who", pronunciation: "/huː/", type: "pronoun", vietnamese: "ai, người nào, kẻ nào, người như thế nào", example: "Who is that? (Đó là ai?)", image: ""},
    {english: "whole", pronunciation: "/həʊl/", type: "adjective/noun", vietnamese: "bình an vô sự, không suy suyển, không hư hỏng; toàn bộ, tất cả, toàn thể", example: "I ate the whole cake. (Tôi đã ăn cả cái bánh.)", image: ""},
    {english: "whose", pronunciation: "/huːz/", type: "determiner/pronoun", vietnamese: "của ai", example: "Whose book is this? (Đây là sách của ai?)", image: ""},
    {english: "why", pronunciation: "/waɪ/", type: "adverb", vietnamese: "tại sao, vì sao", example: "Why are you sad? (Tại sao bạn buồn?)", image: ""},
    {english: "wide", pronunciation: "/waɪd/", type: "adjective", vietnamese: "rộng, rộng lớn", example: "The river is very wide. (Con sông rất rộng.)", image: ""},
    {english: "wife", pronunciation: "/waɪf/", type: "noun", vietnamese: "vợ", example: "His wife is a doctor. (Vợ anh ấy là bác sĩ.)", image: ""},
    {english: "wild", pronunciation: "/waɪld/", type: "adjective", vietnamese: "dại, hoang", example: "Tigers are wild animals. (Hổ là động vật hoang dã.)", image: ""},
    {english: "will", pronunciation: "/wɪl/", type: "modal verb/noun", vietnamese: "sẽ; ý chí, ý định", example: "I will go to school tomorrow. (Tôi sẽ đi học vào ngày mai.)", image: ""},
    {english: "win", pronunciation: "/wɪn/", type: "verb", vietnamese: "chiếm, đoạt, thu được", example: "Our team wants to win the game. (Đội của chúng tôi muốn thắng trận đấu.)", image: ""},
    {english: "wind", pronunciation: "/wɪnd/", type: "noun", vietnamese: "gió", example: "The wind is blowing strongly. (Gió đang thổi mạnh.)", image: ""},
    {english: "window", pronunciation: "/ˈwɪn.dəʊ/", type: "noun", vietnamese: "cửa sổ", example: "Close the window, please. (Xin hãy đóng cửa sổ.)", image: ""},
    {english: "wing", pronunciation: "/wɪŋ/", type: "noun", vietnamese: "cánh, sự bay, sự cất cánh", example: "A bird has two wings. (Con chim có hai cánh.)", image: ""},
    {english: "winter", pronunciation: "/ˈwɪn.tər/", type: "noun", vietnamese: "mùa đông", example: "I like winter because it's cold. (Tôi thích mùa đông vì trời lạnh.)", image: ""},
    {english: "wire", pronunciation: "/waɪər/", type: "noun", vietnamese: "dây (kim loại)", example: "Be careful with electric wires. (Hãy cẩn thận với dây điện.)", image: ""},
    {english: "wish", pronunciation: "/wɪʃ/", type: "verb/noun", vietnamese: "ước, mong muốn; sự mong ước, lòng mong muốn", example: "I wish you a happy birthday. (Tôi chúc bạn một sinh nhật vui vẻ.)", image: ""},
    {english: "with", pronunciation: "/wɪð/", type: "preposition", vietnamese: "với, cùng", example: "I went to the cinema with my friends. (Tôi đi xem phim với bạn bè.)", image: ""},
    {english: "woman", pronunciation: "/ˈwʊm.ən/", type: "noun", vietnamese: "đàn bà, phụ nữ", example: "The woman is wearing a blue dress. (Người phụ nữ đang mặc một chiếc váy xanh.)", image: ""},
    {english: "women", pronunciation: "/ˈwɪm.ɪn/", type: "noun", vietnamese: "Những người phụ nữ", example: "Many women work in this office. (Nhiều phụ nữ làm việc ở văn phòng này.)", image: ""},
    {english: "wonder", pronunciation: "/ˈwʌn.dər/", type: "verb", vietnamese: "ngạc nhiên, lấy làm lạ, kinh ngạc", example: "I wonder what he's doing. (Tôi tự hỏi anh ấy đang làm gì.)", image: ""},
    {english: "won't", pronunciation: "/wəʊnt/", type: "noun", vietnamese: "Sẽ không", example: "I won't be late. (Tôi sẽ không đến muộn.)", image: ""},
    {english: "wood", pronunciation: "/wʊd/", type: "noun", vietnamese: "gỗ", example: "The table is made of wood. (Cái bàn làm bằng gỗ.)", image: ""},
    {english: "word", pronunciation: "/wɜːd/", type: "noun", vietnamese: "từ", example: "Learn new words every day. (Học từ mới mỗi ngày.)", image: ""},
    {english: "work", pronunciation: "/wɜːk/", type: "verb/noun", vietnamese: "làm việc, sự làm việc", example: "I have a lot of work to do. (Tôi có nhiều việc phải làm.)", image: ""},
    {english: "world", pronunciation: "/wɜːld/", type: "noun", vietnamese: "thế giới", example: "The world is a beautiful place. (Thế giới là một nơi tươi đẹp.)", image: ""},
    {english: "would", pronunciation: "/wʊd/", type: "noun", vietnamese: "Sẽ", example: "I would like a cup of tea. (Tôi muốn một tách trà.)", image: ""},
    {english: "write", pronunciation: "/raɪt/", type: "verb", vietnamese: "viết", example: "Please write your name here. (Xin hãy viết tên của bạn ở đây.)", image: ""},
    {english: "written", pronunciation: "/ˈrɪt.ən/", type: "adjective", vietnamese: "viết ra, được thảo ra", example: "The letter was written in English. (Lá thư được viết bằng tiếng Anh.)", image: ""},
    {english: "wrong", pronunciation: "/rɒŋ/", type: "adjective/adverb", vietnamese: "sai", example: "Your answer is wrong. (Câu trả lời của bạn sai.)", image: ""},
    {english: "wrote", pronunciation: "/rəʊt/", type: "verb", vietnamese: "viết", example: "She wrote a letter to her friend. (Cô ấy đã viết một lá thư cho bạn của mình.)", image: ""},
    {english: "yard", pronunciation: "/jɑːd/", type: "noun", vietnamese: "Iat, thước Anh (bằng 0,914 mét), sân", example: "The children are playing in the yard. (Những đứa trẻ đang chơi trong sân.)", image: ""},
    {english: "year", pronunciation: "/jɪər/", type: "noun", vietnamese: "năm", example: "Happy New Year! (Chúc mừng năm mới!)", image: ""},
    {english: "yellow", pronunciation: "/ˈjel.əʊ/", type: "adjective", vietnamese: "vàng", example: "The sun is yellow. (Mặt trời có màu vàng.)", image: ""},
    {english: "yes", pronunciation: "/jes/", type: "interjection", vietnamese: "vâng, phải, dạ, được, ừ, có, có chứ", example: "Yes, I agree. (Vâng, tôi đồng ý.)", image: ""},
    {english: "yet", pronunciation: "/jet/", type: "adverb", vietnamese: "còn, hãy còn, còn nữa", example: "He hasn't arrived yet. (Anh ấy vẫn chưa đến.)", image: ""},
    {english: "you", pronunciation: "/juː/", type: "pronoun", vietnamese: "anh, chị, ông, bà, ngài, ngươi, mày; các anh, các chị, các ông, các bà, các ngài", example: "You are a good student. (Bạn là một học sinh giỏi.)", image: ""},
    {english: "young", pronunciation: "/jʌŋ/", type: "adjective", vietnamese: "trẻ, trẻ tuổi, thiếu niên, thanh niên", example: "She is a young girl. (Cô ấy là một cô gái trẻ.)", image: ""},
    {english: "your", pronunciation: "/jɔːr/", type: "determiner", vietnamese: "của anh, của chị, của ngài, của mày; của các anh, của các chị, của các ngài, của", example: "This is your book. (Đây là sách của bạn.)", image: ""}
];

// Biến trạng thái
let currentWordIndex = 0;
let currentMode = 'flashcard';
let learnedWords = new Set();
let correctAnswers = 0;
let totalQuizAttempts = 0;
let currentStreak = 0;
let filteredVocabulary = [...vocabulary]; // Mảng từ vựng đã được lọc
let currentFilter = 'ALL'; // Bộ lọc hiện tại (ALL, A, B, ...)
let currentQuizWord = null; // Biến để lưu từ hiện tại trong quiz

// Khởi tạo ứng dụng
function initApp() {
    // Đảm bảo nút "All" và "Flashcard" được active khi khởi tạo
    setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
    filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
    
    updateStats();
    updateProgress();
    generateAlphabetContent(); // Khởi tạo nội dung bảng chữ cái
}

// Hàm mới để lật thẻ
function flipCard() {
    const card = document.querySelector('.word-card-inner');
    if (card) {
        card.classList.toggle('is-flipped');
    }
}

// Hiển thị từ hiện tại
function displayWord() {
    // Đảm bảo thẻ luôn ở mặt trước khi hiển thị từ mới
    const card = document.querySelector('.word-card-inner');
    if (card && card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
    }

    const word = filteredVocabulary[currentWordIndex];
    const wordImageElement = document.getElementById('wordImage'); 

    if (!word) {
        document.getElementById('wordEnglish').textContent = "Không có từ nào để hiển thị.";
        document.getElementById('wordPronunciation').textContent = "";
        document.getElementById('wordType').textContent = "";
        document.getElementById('wordVietnamese').textContent = "";
        document.getElementById('wordExample').innerHTML = "";
        if (wordImageElement) { 
            wordImageElement.src = ""; 
            wordImageElement.style.display = "none"; 
        }
        return;
    }

    document.getElementById('wordEnglish').textContent = word.english;
    document.getElementById('wordPronunciation').textContent = word.pronunciation;
    document.getElementById('wordType').textContent = word.type;
    document.getElementById('wordVietnamese').textContent = word.vietnamese;
    document.getElementById('wordExample').innerHTML = `<strong>Ví dụ:</strong> ${word.example}`;

    // THÊM ĐOẠN CODE NÀY VÀO ĐÂY (để hiển thị ảnh)
    // Nếu bạn đang chạy script fetch-images.js lần đầu, thuộc tính .image có thể chưa có.
    // Script fetch-images.js sẽ thêm nó vào.
    if (wordImageElement && word.image) {
        wordImageElement.src = word.image;
        wordImageElement.style.display = "block"; 
    } else if (wordImageElement) {
        wordImageElement.src = ""; 
        wordImageElement.style.display = "none";
    }
    // KẾT THÚC ĐOẠN THÊM VÀO
}

// Chuyển từ tiếp theo
function nextWord() {
    if (filteredVocabulary.length === 0) return;
    currentWordIndex = (currentWordIndex + 1) % filteredVocabulary.length;
    displayWord();
    addFadeAnimation();
}

// Chuyển từ trước
function previousWord() {
    if (filteredVocabulary.length === 0) return;
    currentWordIndex = currentWordIndex === 0 ? filteredVocabulary.length - 1 : currentWordIndex - 1;
    displayWord();
    addFadeAnimation();
}

// Đánh dấu từ đã học
function markAsLearned() {
    const currentWord = filteredVocabulary[currentWordIndex];
    if (!currentWord) return;

    if (!learnedWords.has(currentWord.english)) {
        learnedWords.add(currentWord.english);
        updateProgress();
    }

    updateStats();

    const button = document.querySelector('.btn-success');
    if (button) {
        const originalText = button.textContent;
        const originalBackground = button.style.background;

        button.textContent = '✓ Đã thuộc';
        button.style.background = '#00b894';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = originalBackground;
        }, 1000);
    }
    
    nextWord();
}

// Phát âm từ
function speakWord() {
    let wordToSpeak = null;

    if (currentMode === 'quiz' && currentQuizWord) {
        wordToSpeak = currentQuizWord;
    } else {
        wordToSpeak = filteredVocabulary[currentWordIndex];
    }

    if (!wordToSpeak) return;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(wordToSpeak.english);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt không hỗ trợ text-to-speech');
    }
}

// Đặt lại tiến độ
function resetProgress() {
    if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ học?')) {
        learnedWords.clear(); // Xóa tất cả các từ đã học
        correctAnswers = 0;
        totalQuizAttempts = 0;
        currentStreak = 0;
        updateStats(); // Cập nhật thống kê về 0
        updateProgress(); // Cập nhật thanh tiến độ về 0%

        // Đảm bảo Flashcard quay về từ đầu của toàn bộ danh sách
        currentWordIndex = 0;
        filteredVocabulary = [...vocabulary]; // Đặt lại filteredVocabulary về toàn bộ từ

        // Đảm bảo nút "All" được active trở lại
        const allButton = document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`);
        if (allButton) {
            filterByLetter('ALL', allButton); // Gọi filterByLetter để đặt lại và active nút All
        } else {
            // Fallback nếu không tìm thấy nút All (không mong muốn)
            displayWord(); 
        }

        if (currentMode === 'quiz') {
            generateQuiz(); // Tạo quiz mới nếu đang ở chế độ quiz
        }
    }
}

// Chuyển đổi chế độ
function setMode(mode, sourceElement = null) {
    currentMode = mode;

    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    if (sourceElement) {
        sourceElement.classList.add('active');
    } else {
        // "Fallback": tìm nút bằng cách khớp chuỗi onclick (ít hiệu quả hơn nhưng an toàn)
        const targetBtn = document.querySelector(`.mode-btn[onclick*="setMode('${mode}')"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    document.getElementById('flashcardMode').classList.add('hidden');
    document.getElementById('quizMode').classList.add('hidden');
    document.getElementById('searchMode').classList.add('hidden');
    document.getElementById('alphabetMode').classList.add('hidden');

    switch (mode) {
        case 'flashcard':
            document.getElementById('flashcardMode').classList.remove('hidden');
            // Khi về flashcard, luôn đảm bảo đang hiển thị bộ từ đầy đủ
            // và từ đầu tiên, sau đó mới áp dụng filter nếu có
            filteredVocabulary = [...vocabulary];
            currentWordIndex = 0;
            displayWord(); 
            // Đảm bảo nút "All" được active khi chuyển sang flashcard
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
        case 'quiz':
            document.getElementById('quizMode').classList.remove('hidden');
            generateQuiz();
            break;
        case 'search':
            document.getElementById('searchMode').classList.remove('hidden');
            document.getElementById('searchInput').value = '';
            displayAllWords(); // Hiển thị toàn bộ từ ban đầu khi vào tìm kiếm
            // Đảm bảo nút "All" được active khi chuyển sang search
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
        case 'alphabet':
            document.getElementById('alphabetMode').classList.remove('hidden');
            generateAlphabetContent();
            // Đảm bảo nút "All" được active khi chuyển sang A-Z
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
    }
}


// Tạo quiz
function generateQuiz() {
    // Lọc ra các từ CHƯA ĐƯỢC HỌC TỪ DANH SÁCH ĐÃ LỌC (filteredVocabulary)
    // Thay vì dùng 'vocabulary', chúng ta dùng 'filteredVocabulary'
    let unlearnedWords = filteredVocabulary.filter(word => !learnedWords.has(word.english));
    
    // Nếu tất cả các từ đã được học (trong bộ lọc hiện tại), hiển thị thông báo
    if (unlearnedWords.length === 0) {
        document.getElementById('quizWord').textContent = "Không có từ nào để quiz trong bộ lọc này hoặc bạn đã học hết!";
        document.getElementById('quizOptions').innerHTML = "<p style='text-align:center;'>Hãy thử chọn bộ lọc khác hoặc reset tiến độ để chơi lại.</p>";
        document.getElementById('nextQuizBtn').style.display = 'none';
        return; // Thoát hàm nếu không còn từ nào để quiz
    }

    // Chọn một từ ngẫu nhiên từ danh sách các từ CHƯA HỌC và ĐÃ LỌC
    currentQuizWord = unlearnedWords[Math.floor(Math.random() * unlearnedWords.length)];
    document.getElementById('quizWord').textContent = currentQuizWord.english;

    generateQuizOptions(currentQuizWord);

    // Ẩn nút next quiz ban đầu và reset trạng thái tùy chọn
    document.getElementById('nextQuizBtn').style.display = 'none';
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'auto'; // Cho phép click lại
        opt.classList.remove('correct', 'wrong'); // Xóa các class highlight cũ
    });
}

// Tạo các lựa chọn quiz
function generateQuizOptions(correctWord) {
    const options = [correctWord.vietnamese];
    const usedVietnameseMeanings = new Set([correctWord.vietnamese]); // Dùng để tránh trùng nghĩa

    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        const randomMeaning = vocabulary[randomIndex].vietnamese;
        if (!usedVietnameseMeanings.has(randomMeaning)) {
            options.push(randomMeaning);
            usedVietnameseMeanings.add(randomMeaning);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectQuizOption(option, correctWord.vietnamese, optionElement);
        optionsContainer.appendChild(optionElement);
    });
}

// Chọn đáp án quiz
function selectQuizOption(selected, correct, element) {
    totalQuizAttempts++;

    // Vô hiệu hóa tất cả các lựa chọn sau khi người dùng chọn
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none'; // Không cho click thêm
        if (opt.textContent === correct) {
            opt.classList.add('correct'); // Highlight đáp án đúng
        } else if (opt === element && selected !== correct) {
            opt.classList.add('wrong'); // Highlight đáp án sai của người dùng
        }
    });

    if (selected === correct) {
        correctAnswers++;
        currentStreak++;
        // Nếu trả lời đúng, đánh dấu từ này là đã học (nếu chưa)
        if (currentQuizWord && !learnedWords.has(currentQuizWord.english)) {
             learnedWords.add(currentQuizWord.english);
             updateProgress();
        }
    } else {
        currentStreak = 0;
    }

    updateStats(); // Cập nhật thống kê

    // Hiển thị nút câu tiếp theo
    document.getElementById('nextQuizBtn').style.display = 'inline-block';
}

// Câu quiz tiếp theo
function nextQuiz() {
    generateQuiz();
}

// Lọc theo chữ cái
function filterByLetter(letter, sourceElement = null) {
    currentFilter = letter;

    // Đặt lại trạng thái active cho các nút chữ cái
    document.querySelectorAll('.alphabet-btn').forEach(btn => btn.classList.remove('active'));
    if (sourceElement) {
        sourceElement.classList.add('active');
    } else {
        // "Fallback": tìm nút bằng cách khớp chuỗi onclick (ít hiệu quả hơn nhưng an toàn)
        const targetBtn = document.querySelector(`.alphabet-btn[onclick*="filterByLetter('${letter}')"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    if (letter === 'ALL') {
        filteredVocabulary = [...vocabulary];
    } else {
        filteredVocabulary = vocabulary.filter(word =>
            word.english.charAt(0).toUpperCase() === letter.toUpperCase()
        );
    }
    
    // RẤT QUAN TRỌ"NG": Đặt lại currentWordIndex về 0 khi bộ lọc thay đổi
    currentWordIndex = 0; 
    displayWord(); // Hiển thị từ đầu tiên của bộ lọc mới (áp dụng cho flashcard)

    // === THÊM ĐOẠN CODE NÀY VÀO ĐÂY ===
    if (currentMode === 'quiz') {
        generateQuiz(); // Nếu đang ở chế độ quiz, làm mới câu hỏi ngay lập tức
    }
    // ===================================

    // Nếu đang ở chế độ Search hoặc Alphabet, cần cập nhật nội dung
    if (currentMode === 'search') {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        if (searchTerm === '') {
            displayAllWords();
        } else {
            searchWords();
        }
    } else if (currentMode === 'alphabet') {
        generateAlphabetContent();
    }
}

// Tìm kiếm từ
function searchWords() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let searchResults = [];
    if (searchTerm === '') {
        searchResults = [...vocabulary]; // Khi không có từ khóa, hiển thị toàn bộ
    } else {
        searchResults = vocabulary.filter(word =>
            word.english.toLowerCase().includes(searchTerm) ||
            word.vietnamese.toLowerCase().includes(searchTerm)
        );
    }
    displaySearchResults(searchResults);
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(words) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';

    if (words.length === 0) {
        // DÒNG NÀY ĐANG BỊ LỖI CÚ PHÁP
        wordList.innerHTML = '<p style="text-align: center; color: #777;">Không tìm thấy từ nào phù hợp.</p>'; // Đã sửa
        return;
    }

    words.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
            <h3>${word.english}</h3>
            <p><strong>Phát âm:</strong> ${word.pronunciation}</p> // Đã sửa
            <p><strong>Loại từ:</strong> ${word.type}</p>
            <p><strong>Nghĩa:</strong> ${word.vietnamese}</p> // Đã sửa
            <p><em>${word.example}</em></p>
        `;
        wordItem.onclick = () => {
            const index = vocabulary.findIndex(v => v.english === word.english);
            if (index !== -1) {
                currentWordIndex = index;
                // Khi click từ từ search, ta coi như đang muốn xem toàn bộ từ điển
                filteredVocabulary = [...vocabulary]; 
                setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
                filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            }
        };
        wordList.appendChild(wordItem);
    });
}

// Hiển thị tất cả từ (cho chế độ tìm kiếm khi không có từ khóa)
function displayAllWords() {
    displaySearchResults(vocabulary);
}

// Tạo nội dung theo bảng chữ cái
function generateAlphabetContent() {
    const alphabetContent = document.getElementById('alphabetContent');
    alphabetContent.innerHTML = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
        const wordsForLetter = vocabulary.filter(word =>
            word.english.charAt(0).toUpperCase() === letter
        );

        // Chỉ tạo section nếu có từ cho chữ cái đó HOẶC nếu bộ lọc hiện tại là 'ALL'
        if (wordsForLetter.length > 0 || currentFilter === 'ALL') {
            const section = document.createElement('div');
            section.className = 'alphabet-section';

            const title = document.createElement('h2');
            title.className = 'alphabet-title';
            title.textContent = `Chữ ${letter}`;

            const wordsContainer = document.createElement('div');
            wordsContainer.className = 'alphabet-words';

            wordsForLetter.forEach(word => {
                const wordItem = document.createElement('div');
                wordItem.className = 'alphabet-word-item';
                wordItem.innerHTML = `
                    <div class="alphabet-word-english">${word.english}</div>
                    <div class="alphabet-word-vietnamese">${word.vietnamese}</div>
                `;
                wordItem.onclick = () => {
                    currentWordIndex = vocabulary.findIndex(v => v.english === word.english);
                    // Khi click từ từ A-Z, ta coi như đang muốn xem toàn bộ từ điển
                    filteredVocabulary = [...vocabulary]; 
                    setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
                    filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
                };
                wordsContainer.appendChild(wordItem);
            });

            section.appendChild(title);
            section.appendChild(wordsContainer);
            alphabetContent.appendChild(section);
        }
    });
}

// Cập nhật thống kê
function updateStats() {
    document.getElementById('learnedCount').textContent = learnedWords.size;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('streakCount').textContent = currentStreak;

    const accuracy = totalQuizAttempts > 0 ? Math.round((correctAnswers / totalQuizAttempts) * 100) : 0;
    document.getElementById('accuracyRate').textContent = accuracy + '%';
}

// Cập nhật thanh tiến độ
function updateProgress() {
    const totalWords = vocabulary.length;
    const learnedCount = learnedWords.size;
    const percentage = (learnedCount / totalWords) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${learnedCount}/${totalWords} từ đã học`;
}

// Thêm hiệu ứng fade
function addFadeAnimation() {
    const container = document.getElementById('flashcardMode');
    if (container) { // Kiểm tra để tránh lỗi nếu container không tồn tại
        container.classList.remove('fade-in');
        void container.offsetWidth; // Force reflow/repaint to restart animation
        setTimeout(() => {
            container.classList.add('fade-in');
        }, 10);
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    initApp();

    document.getElementById('searchInput').addEventListener('input', searchWords);

    // Kịp thời kiểm tra để xem nếu người dùng có để lại các event listener cũ từ các lần sửa trước
    // Nếu bạn đã xóa chúng đi, thì đoạn này có thể không cần thiết nữa, nhưng an toàn thì cứ để lại
    // để tránh các listener bị nhân đôi hoặc xung đột.
    // Tốt nhất là sử dụng 'onclick' trực tiếp như đã sửa ở Bước 1.

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (currentMode === 'flashcard') {
            switch (e.key) {
                case 'ArrowRight':
                case ' ': // Spacebar
                    e.preventDefault();
                    nextWord();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    previousWord();
                    break;
                case 'Enter':
                    e.preventDefault();
                    markAsLearned();
                    break;
                case 's':
                case 'S':
                    e.preventDefault();
                    if (e.ctrlKey || e.metaKey) {
                        speakWord();
                    } else {
                        flipCard();
                    }
                    break;
            }
        } else if (currentMode === 'quiz') {
            if (e.key === 'Enter' && document.getElementById('nextQuizBtn').style.display !== 'none') {
                 e.preventDefault();
                 nextQuiz();
            }
        }
    });
});