import express, { Request } from 'express';

const router = express.Router()

const render = (routeName: string, views: string, layout = null) => {
    router.get(routeName, (_req: Request, res) => {
        return res.render(views, { layout })
    })
}

router.post('/create-session', (req: Request, res) => {
    if (req.session) {
        req.session.user = req.body.user;
        req.session.token = req.body.token;
    }
    res.redirect('/login');
})

router.post('/destroy-session', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
        })
        res.redirect('/login');
    }
});

router.use((req, res, next) => {
    if (req.session?.user){
        if(req.originalUrl.includes('/login')){
            res.redirect('/dashboard')
        }
    }
    return next();
});

render('/login', 'auth/login', 'auth/login')
render('/reset-password', 'auth/reset-password', 'auth/reset-password')

export default router
