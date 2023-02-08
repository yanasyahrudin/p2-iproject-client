<script>
import Navbar from '../components/Navbar.vue';
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';
export default {
    name: 'BiographyPage',
    components: { Navbar },
    computed: {
            ...mapState(useAppStore, ['loginUser'])
        },
        methods: {
            ...mapActions(useAppStore, ['fetchLoginUser'])
        },
             created(){
       
             this.fetchLoginUser()
        }
}
</script>

<template>
     <Navbar v-for="user in loginUser" :user="user" :key="user.id" />
    <div>
        <h5><b>MORFEM, sebuah biography</b></h5><br>

        <i>Posted on January 1, 2011 | 3 comments</i><br>

        <div>
            <img src="https://morfemband.files.wordpress.com/2013/01/morfem.jpg" alt="no_image"><br>
        </div>


        <div>
            <i><b>April. 4. 2009 </b></i> Hadir di gigs Tribute to 90’s Shoegaze. Jimi mulai menghubungi Pandu
        </div><br>
        <div>
            <b> Mei. 1. 2009</b> pentas pertama. Nama Morfem mulai di publikasi. Pada opening pameran tunggal Jimi di
            Ruangrupa.
            Jimi! Jimi! Jimi!. Formasi awal Morfem. Jimi (vokal), Pandu Fuzztoni (gitar), Dimas Panji (gitar), Inyo
            Bagenda
            (Bass), Freddie A Warnerin (Drums). Covering Velvet Underground dengan gaya Morfem.
        </div><br>

        <div>
            <i><b>July. 17. 2009.</b></i>
            Bramasta J Sasongko masuk menggantikan Inyo Bagenda. Formasi Morfem pun lebih minimalis.
            Jimi
            Multhazam (vokal), Pandu Fuzztoni (gitar, backing vokal), Freddie A Warnerrin (Drums), Bramasta J Sasongko
            (bass, backing vokal).
        </div><br>

        <div>
            <i>
                <b>
                    January. 13. 2011.
                </b>
            </i>
            Album perdana MORFEM, Indonesia, di rilis
        </div><br>

        <div>
            <i>
                <b>
                    August.15. 2011.
                </b>
            </i>
            Mini album Seka Ingusmu di rilis di Internet. Hanya dalam waktu 3 jam. 5000 orang berhasil
            mengunduh seketika
        </div><br>

        <div>
            <i>
                <b>
                    November 2011
                </b>
            </i> Morfem kembali masuk studio. Merekam album penuh ke dua.
        </div><br>

        <div>
            Lalu kisahnya bergulir…
        </div><br>

        <h3>
            <b>
                CIKAL BAKAl MORFEM
            </b>
        </h3> <br>

        <div>
            Bermula dari sebuah acara bernama Tribute To 90’s Shoegaze. Yang di adakan di Prost Beer House Kemang (RIP).
            4
            April 2009. Bukan, Morfem tidak main di sana. Pandu dan Freddie tampil bersama Damascus. Mengcover
            Swervedriver.
            Jimi hadir di sana untuk menonton Denial yang menyamarkan namanya menjadi Negative Lovers. Mereka mengcover
            Jesus and Mary Chain. Ketika Negative Lovers naik pentas, Jimi, Pandu dan Freddie berjumpa di moshpit ketika
            berstage dive. Lagu Jesus and Mary Chain, April Skies lah yang mempertemukan mereka di atas kepala-kepala
            penonton shoegaze Jakarta yang gundah karena kegalauannya terganggu ulah ugal-ugalan mereka. Sepulang dari
            acara
            tersebut. Jimi mengontak Freddie dan Pandu untuk membentuk sebuah band.
        </div> <br>

        <div>
            Jauh sebelum acara Tribute 90’s Shoegaze Jimi pernah berkolaburasi dengan band Freddie, Nervous Breakdown,
            untuk
            mengcover I Wanna Be your Dog dari The Stooges. Dari sana Jimi sudah menilai, bahwa Freddie adalah pemain
            drum
            yang nendang. Pengaruh John Bonham terasa di permainannya yang modern.
        </div><br>

        <div>
            Sedangkan Pandu Fuzztoni, tergabung dalam The Porno. Band yang bernuansa gelap ala Joy Division. Jimi
            pertama
            kali melihat Pandu ketika tampil di kampusnya pada suatu sore. Pandu masih kelas 3 SMA kala itu. Komunikasi
            pertama Jimi dengan Pandu terjadi justru di kampus tempat Pandu kuliah. Ketika The Upstairs selesai mentas,
            Pandu dan Hangga menemui Jimi di belakang panggung. Dan dialog mereka pertama justru tentang buku biografi
            Kurt
            Cobain, Havier Than Heaven. Setelah Jimi menyapa Pandu “Hey gue denger elo pemuja Cobain, friend?” dan
            terjadilah perbincangan seru kala itu.
        </div><br>

        <div>
            Setelah acara Tribute to 90’s Shoegaze selesai, 2009, Inyo (vokalis Dikeroyok Wanita) menghampiri Jimi.
            Mengajak
            membentuk band cover version Gang Of Four. Kebetulan Jimi sudah punya tekad bulat untuk membuat band baru.
            Dan
            mengincar Freddie dan Pandu sebagai partner. Akhirnya Inyo sepakat untuk memegang posisi bass. Ketika Pandu
            dihubungi, dia mengajak Dhimas Panji sebagai rhytm guitarist. Konsep pun di ubah, akhirnya di studio kita
            mengaransemen Velvet Underground dengan kemasan noise rock. Dengan harapan akan menemukan sound baru kelak.
        </div><br>

        <div>
            Ternyata proses di studio tidak membuat Freddie nyaman. Karena kebiasaan bermain keras. Sedangkan Velvet
            cenderung down tempo dan depresif. Namun dari semua lagu Velvet Underground yang di rombak, di nomor I’m Set
            Free lah Pandu dan Jimi mulai menemukan sound Morfem di masa depan.
        </div><br>

        <h3>
            Nama MORFEM di deklarasikan
        </h3><br>

        <div>
            Setelah band terbentuk, nama gak boleh di lupakan. Pemilihan nama band pun termasuk susah-susah mudah.
            Pertimbangan pertama dari Jimi. Nama band harus memiliki konfigurasi fonts yang keren. Di aplikasikan ke
            poster
            apa saja bisa masuk. Syukur-syukur punya arti yang filosofis. Beberapa nama sempat di diskusikan Jimi ke
            Pandu.
            Dari Zig Zag Crew. Sampai memakai nama band lama Jimi, Morvoids. Namun gak ada satu nama pun yang berkenan
            di
            Pandu. Karena Jimi kadung jatuh hati dengan nama temuannya, Morvoids. Maka di putuskan mencari nama dengan
            awalan kata MOR. Spontan otak Jimi langsung berputar ke zaman dia masih duduk di bangku SMP. Dan kata yang
            selalu menggangu fikirannya ketika belajar kata bahasa Indonesia adalah MORFEM! Setelah di tanya ke Pandu
            (yg
            kebetulan anak sastra Inggris, Dharma persada) apa arti Morfem. Satuan linguistik dari kata yang tak bisa di
            pisahkan. Di googling match. Di Googling lagi, adakah band dengan nama Morfem di dunia? Ternyata tidak ada.
            Yak
            fixed. Kita gunakan Morfem sebagai nama band.
        </div><br>

        <div>
            Hal berikut yang kita lakukan adalah membuat Facebook fanpage. Lalu nama Morfem di deklarasikan pertama kali
            di
            masyarakat melalui sebuah pentas kecil. 1 Mei 2009 Morfem mentas di Ruangrupa. Di pembukaan pameran tunggal
            Jimi
            bertajuk Jimi! Jimi! Jimi!, Morfem mentas dengan modal 8 lagu The Velvet Underground yang telah di vermak
            habis.
        </div><br>

        <div>
            Pentas di ruangrupa tidak terlalu berhasil. Inyo bukanlah pemain bass yang rapi. Sepertinya dia lebih cocok
            menjadi frontman. Akhirnya kita sepakat untuk berpisah dengan Inyo secara baik-baik. Dan Dhimas Panji pun
            akhirnya naik pangkat menjadi teknisi gitar Pandu.
        </div><br>

        <div>
            Setelah beberapa bulan dari di buatnya fanpage Morfem. Tiba-tiba ada nama lain yang menggunakan nama ini di
            Krakow, Polandia. Bah tak ada kata lain. Strategi musti di perketat. Kita harus segera rilis. Berita tentang
            Morfem harus lebih sering di sebar dari band Krakow tersebut. Ayo kita cari bassist baru.
        </div><br>

        <div>
            To be continue
        </div>

        <i>
            3 Comments
        </i>

        <i>
            Posted in Morfem
        </i>

        <i>
            Tagged #MORFEMonTV, morfem, morfem indonesia
        </i>
    </div>
</template>