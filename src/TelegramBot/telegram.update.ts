import { Query } from 'mongoose';
import { log } from 'console';
import { Hears, InjectBot, On, Start, Update } from "nestjs-telegraf";
import { RolesService } from "src/roles/roles.service";
import { ServicesService } from "src/services/services.service";
import { Composer, Context, Telegraf } from "telegraf";
import { CallbackQuery, Message } from "telegraf/typings/core/types/typegram";

@Update()
export class TelegramUpdate {
    services: Array<any>
    userInfo: Object
    constructor(@InjectBot() private readonly bot: Telegraf<Context>, private roleService: RolesService, private serviceService: ServicesService) {
    }
    @Start()
    async onStart(ctx: Context) {
        const telegram_id = ctx.from.id
        this.services = await this.serviceService.getAllServices()
        this.userInfo = {
            name: '', phone_number: '', type: '', service_location: '',
            service_description: '', open_time: '10:00', close_time: '18:00',
            service_price: '10000', spend_time: '30m', service_rating: '4.5',
        }
        const check = await this.roleService.findUser(telegram_id)
        if (check) {
            if (check.role == 'admin') {
                return this.enterAdmin(ctx)
            }
            if (check.role == 'master') {
                return this.enterMaster(ctx)
            }
            if (check.role == 'user') {
                return this.enterClinet(ctx)
            }
        }
        else {
            return this.royhatgaOlish(ctx)
        }

    }




    //Royhatdan o'tish uchun
    royhatgaOlish(ctx: Context) {
        ctx.replyWithHTML('<b>Ro\'yhatdan o\'tish uchun quyidagi tugmalardan birini bosing</b>', {
            reply_markup: {
                keyboard: [[
                    { text: "Ro'yhatdan o'tish" }

                ]],
                resize_keyboard: true,

            }
        })
    }

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
    //Usta uchun
    @Hears("Usta")
    async getMaster(ctx: Context) {
        ctx.replyWithHTML('<b>Siz qaysi kasb egasisiz?</b>', {
            reply_markup: {
                inline_keyboard: this.services.map((item) => [{ text: item.title, callback_data: item.title }]),
                resize_keyboard: true,
            }
        })
    }


    @On('callback_query',)
    async onCallbackQuery(ctx: Context) {
        const msg = ctx.callbackQuery['data']
    }


    //Admin uchun

    enterAdmin(ctx: Context) {
        ctx.replyWithHTML(`Salom <b>${ctx.from.first_name}!</b>\n<i>Quydagi admin paneldan foydalanishingiz mumkin!</i>`, {
            reply_markup: {
                keyboard: [[{ text: 'Servislar' }, { text: 'Ustalar' }], [{ text: "Clientlar" }]],
                resize_keyboard: true,
            }
        })


    }

    //Admin uchun
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






