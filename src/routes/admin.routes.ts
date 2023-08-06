import express from 'express';

const router = express.Router()

const render = (routeName: string, views: string, layout = null) =>{
    router.get(routeName, (req, res)=>{
        return res.render(views, { layout })
    })
}

router.use((req, res, next) => {
    if (req.session?.user === undefined) res.redirect('/login')
    return next();
});

render('/dashboard', 'dashboard/index')



export default router
