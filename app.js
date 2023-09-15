
const app = Vue.createApp({
    data() {
        return {
            coffeeShops: [
                { id: 1, name: 'โต๊ะ 1',image: 'https://baanmainicha.com/jumiqab/2023/06/5-1.png' },
                { id: 2, name: 'โต๊ะ 2',image: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/137614822_1582964158566053_7410844836442537226_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEUjD7o0vJg4AyD0W6wc-p-ATQQrxSLp00BNBCvFIunTZceygE-s4BKJAIL3Sefx1PE-Y6IyfDRHEIXZl3pnqU9&_nc_ohc=if4n1k-INYoAX9lsOQv&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC9KRqpv5TlaHbqTm_yihHBM0VpGQBR5lmA9reWphsjTA&oe=652B52BB'},
                { id: 3, name: 'โต๊ะ 3',image: 'https://inwfile.com/s-k/yk6u8j.jpg'},
                { id: 4, name: 'โต๊ะ 4',image: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/109977519_667540953837477_5121627775664692336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHuX1DvGOJc47Uwzgh4_EaEDQLIEW9yd_oNAsgRb3J3-oEdpgGDhkf4UFJKCzwylqIGI7JIShJG_6M3dW5Vpshz&_nc_ohc=eeOk29DPae0AX9mmlkj&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfDhiHhiMyT06g0Alq6GpWHbvgLiplEZ6EJX2YIeoV3Itw&oe=652B6D63'},
                { id: 5, name: 'โต๊ะVIP 5',image: 'https://business.hungryhub.com/wp-content/uploads/2022/07/%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88-1024x576.webp'},
                { id: 6, name: 'โต๊ะVIP 6',image: 'https://inwfile.com/s-cq/u9sba2.jpg'},
                // ... ร้านอื่นๆ
            ],
            currentShop: {},
            booking: {
                name: '',
                phone: '',
                date: '',
                time: '',
                tables: 1
            },
            bookings: []
        };
    },
    methods: {
        deleteBooking(bookingId) {
            this.bookings = this.bookings.filter(book => book.id !== bookingId)
        },
        bookTable() {
            this.bookings.push({
                id: Date.now(),  // ใช้ timestamp เป็น id ของการจอง (ไม่น่าจะมีซ้ำกัน)
                shopName: this.currentShop.name,
                name: this.booking.name,
                phone: this.booking.phone,
                date: this.booking.date,
                time: this.booking.time,
                tables: this.booking.tables
            });
            this.clearBookingForm();
            // ปิด modal หลังจากส่งข้อมูลการจอง
            var bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
            bookingModal.hide();
        },
        clearBookingForm() {
            this.booking.name = '';
            this.booking.phone = '';
            this.booking.date = '';
            this.booking.time = '';
            this.booking.tables = 1;
        }
    },
});

app.mount("#app");
