import { Command, Hears, InjectBot, On, Start, Update } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";
import { Message } from "telegraf/typings/core/types/typegram";

@Update()
export class TelegramUpdate {
    Data: Array<any>
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {
        this.Data = [
            {
                name: 'Sartaroshxona',
                type: 'sartarosh',
            },
            {
                name: 'Go\'zallik saloni',
                type: 'salon',
            }
            ,
            {
                name: 'Zargarlik ustaxonasi',
                type: 'zargar',
            },

        ]
    }



    @Start()
    onStart(ctx: Context) {
        ctx.replyWithHTML(`Assalomu alaykum! ${ctx.from.first_name}\n<b>Online navbat olish botiga xush kelibsiz</b>`, {
            reply_markup: {
                keyboard: [[
                    { text: "Ro'yhatdan o'tish" },
                ]],
                resize_keyboard: true,
                selective: false,
            }
        });
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
    @On('message')
    onMessage(ctx: Context) {
        const msg = ctx.message as Message.TextMessage;
        if (msg.text === 'Usta') {
            ctx.replyWithHTML("<b>Siz qaysi service bo'yicha hizmat ko'rsatasiz?</b>", {
                reply_markup: {
                    keyboard: this.Data.map((item) => {
                        return [{ text: item.name }]
                    }),
                    resize_keyboard: true,
                }
            })
        }
        else if (msg.text === 'Mijoz') {
            ctx.replyWithHTML("<b>Sizning ma'lumotlaringiz kerak bizga?</b>")
        }
        else {
            ctx.replyWithHTML("<i>Siz mavjud bo'magan comandani tanladingzi...</i>")
        }
    }


}


        //Usta ro'yhatdan o'tish qismi

        //     this.bot.action('sartarosh', (ctx) => {
        //         const ustaInfo = {
        //             name: ctx.from.first_name,
        //             phone_number: ctx.from,
        //             type: 'sartarosh',
        //             service_location: 'location',
        //             service_description: 'Palon joyda sartaroshxona ishlaydi',
        //             open_time: '10:00',
        //             close_time: '18:00',
        //             service_price: '10000',
        //             spend_time: '30m',
        //             service_rating: '4.5',
        //         }
        //         ctx.replyWithHTML('<b>Ismini kiriting</b>', {

        //         });
        //     });


        // }


