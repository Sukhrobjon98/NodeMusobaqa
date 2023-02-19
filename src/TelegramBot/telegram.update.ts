import { Command, Hears, InjectBot, On, Start, Update } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";
import { Message } from "telegraf/typings/core/types/typegram";

@Update()
export class TelegramUpdate {
    Data: Array<any>
    userInfo: Object
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {
        this.Data = [
            { name: 'Sartaroshxona', type: 'sartarosh', }, { name: 'Go\'zallik saloni', ype: 'salon', }]

    }
    @Start()
    onStart(ctx: Context) {
        if (true) {
            return this.enterAdmin(ctx)
            return this.enterMaster(ctx)

        }
        this.enterClinet(ctx)
        // ctx.replyWithHTML(`Assalomu alaykum! ${ctx.from.first_name}\n<b>Online navbat olish botiga xush kelibsiz</b>`, {
        //     reply_markup: {
        //         keyboard: [[
        //             { text: "Ro'yhatdan o'tish" },
        //         ]],
        //         resize_keyboard: true,
        //         selective: false,
        //     }
        // });
    }


    //Royhatdan o'tish qismi
    @Hears("Ro'yhatdan o'tish")
    getRegsitration(ctx: Context) {
        ctx.replyWithHTML('<b>Ro\'yhatdan o\'tish uchun quyidagi tugmalardan birini bosing</b>', {
            reply_markup: {
                keyboard: [[
                    { text: "Usta" },
                    { text: "Mijoz" },
                ]],
                resize_keyboard: true,
            }

        })
    }

    //Kasb qismi
    // @On('message')
    // onMessage(ctx: Context) {
    //     const msg = ctx.message as Message.TextMessage;
    //     if (msg.text === 'Usta') {
    //         ctx.replyWithHTML("<b>Siz qaysi service bo'yicha hizmat ko'rsatasiz?</b>", {
    //             reply_markup: {
    //                 keyboard: this.Data.map((item) => {
    //                     return [{ text: item.name }]
    //                 }),
    //                 resize_keyboard: true,
    //             }
    //         })
    //     }
    //     else if (msg.text === 'Mijoz') {
    //         ctx.replyWithHTML("<b>Sizning ma'lumotlaringiz kerak bizga?</b>")
    //     }
    //     else {
    //         ctx.replyWithHTML("<i>Siz mavjud bo'magan comandani tanladingzi...</i>")
    //     }
    // }




    //Admin uchun

    enterAdmin(ctx: Context) {
        ctx.replyWithHTML(`Salom <b>${ctx.from.first_name}!</b>\n<i>Quydagi admin paneldan foydalanishingiz mumkin!</i>`, {
            reply_markup: {
                keyboard: [[{ text: 'Servislar' }, { text: 'Ustalar' }], [{ text: "Clientlar" }]],
                resize_keyboard: true,
            }
        })
    }

    @Hears('Servislar')
    servislar(ctx: Context) {
        ctx.replyWithHTML("<b>Servislar</b>")
    }

    @Hears('Ustalar')
    ustalar(ctx: Context) {
        ctx.replyWithHTML("<b>Ustalar</b>")
    }
    @Hears("Clientlar")
    clinetlar(ctx: Context) {
        ctx.replyWithHTML("<b>Clinetlar</b>")
    }




    //Master uchun

    enterMaster(ctx: Context) {
        ctx.replyWithHTML(`<b>Salom ${ctx.from.first_name}!</b>\n<i>Quydagi menuyulardan birini tanlashingiz mumkin!</i>`, {
            reply_markup: {
                keyboard: [[{ text: 'Mijozlar' }, { text: 'Vaqt' }, { text: 'Reyting' }], [{ text: "Master ma'lumotlarini o'zgartirish" }]],
                resize_keyboard: true,
            }
        })
    }
    @Hears('Mijozlar')
    mijozlar(ctx: Context) {
        ctx.replyWithHTML("<b>Mijozlar</b>")
    }

    @Hears('Vaqt')
    vaqt(ctx: Context) {
        ctx.replyWithHTML("<b>Vaqt</b>")
    }

    @Hears('Reyting')
    reyting(ctx: Context) {
        ctx.replyWithHTML("<b>Reyting</b>")
    }
    @Hears("Master ma'lumotlarini o'zgartirish")
    mastermalumotlarniOzgartirish(ctx: Context) {
        ctx.replyWithHTML("<b>Master ma'lumotlarini o'zgartirish</b>")
    }







    //Mijozi uchun

    enterClinet(ctx: Context) {
        ctx.replyWithHTML(`<b>Salom ${ctx.from.first_name}!</b>\n<i>Quydagi xizmatlardan birini tanlashizngiz mumkin</i>`, {
            reply_markup: {
                keyboard: [[{ text: 'Xizmatlar' }, { text: 'Tanlangan xizmatlar' }], [{ text: "Ma'lumotlarni o'zgartirish" }]],
                resize_keyboard: true,
            }
        })
        const msg = ctx.message as Message.TextMessage;
        console.log(msg.text);
    }
    @Hears('Xizmatlar')
    xizmatlat(ctx: Context) {
        ctx.replyWithHTML("<b>Xizmatlar</b>")

    }
    @Hears('Tanlangan xizmatlar')
    tanlanganXizmatlar(ctx: Context) {
        ctx.replyWithHTML("<b>Tanlangan xizmatlar</b>")
    }
    @Hears("Ma'lumotlarni o'zgartirish")
    malumotlarniOzgartirish(ctx: Context) {
        ctx.replyWithHTML("<b>Ma'lumotlarni o'zgartirish</b>")
    }



}






// this.userInfo = {
//     name: '',
//     phone_number: '',
//     type: '',
//     service_location: '',
//     service_description: '',
//     open_time: '10:00',
//     close_time: '18:00',
//     service_price: '10000',
//     spend_time: '30m',
//     service_rating: '4.5',
// }     