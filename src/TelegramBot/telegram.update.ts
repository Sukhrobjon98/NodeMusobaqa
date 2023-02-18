import { InjectBot, Start, Update } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";



@Update()
export class TelegramUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) { }

    @Start()
    onStart(ctx: Context) {
        ctx.reply(`Assalomu alaykum!\n${ctx.from.first_name} Iltimos Ro'yhatdan o'tsangiz`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Usta", callback_data: 'usta' }, { text: "Mijoz", callback_data: "mijoz" }],
                ]
            }
        });



        //Usta qismi
        this.bot.action('usta', (ctx) => {
            ctx.replyWithHTML('<b>ltmos service nomini kiriting </b>', {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Sartaroshxona", callback_data: 'sartarosh' }],
                        [{ text: "Go'zallik saloni", callback_data: "salon" }],
                        [{ text: "Zargarlik ustaxonasi", callback_data: 'zargar' }],
                        [{ text: "Soatsoz", callback_data: "soat" }]
                    ]
                }
            });

        });


        //Usta ro'yhatdan o'tish qismi

        this.bot.action('sartarosh', (ctx) => {
            const ustaInfo = {
                name: ctx.from.first_name,
                phone_number: ctx.from,
                type: 'sartarosh',
                service_location: 'location',
                service_description: 'Palon joyda sartaroshxona ishlaydi',
                open_time: '10:00',
                close_time: '18:00',
                service_price: '10000',
                spend_time: '30m',
                service_rating: '4.5',
            }
            ctx.replyWithHTML('<b>Ismini kiriting</b>', {

            });
        });
    }
}