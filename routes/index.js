import express from 'express';

const router = express();

router.get('/', (req, res, next) => {
    indexPage(res);
});

export const indexPage = (res) => {
    let redirectUrl = "/";
    if (res.locals.previousUrl) {
        redirectUrl = res.locals.previousUrl;
    }
    res.render('index', { redirectUrl })
}

export default router;