import { createPage, getPages, getPage, updatePage } from "../../services/lib/page.service.js"

const createPageController = async (req, res, next) => {
    try {
        // const user = req.user._id;
        const user = req.auth.userId;

        const requestedData = req.body;
        const page = await createPage(user, requestedData);

        res.status(200).json({
            status: 200,
            response: page
        });
    } catch (err) {
        next(err);
    }
};

const getPagesController = async (req, res, next) => {
    try {
        const user = req.auth.userId;

        const pages = await getPages(user);

        res.status(200).json({
            status: 200,
            response: pages
        });
    } catch (err) {
        next(err);
    }
};

const getPageController = async (req, res, next) => {
    try {
        const user = req.auth.userId;
        const { page: id } = req.params;

        const page = await getPage(user, id);

        res.status(200).json({
            status: 200,
            response: page
        });
    } catch (err) {
        next(err);
    }
};

const updatePageController = async (req, res, next) => {
    try {
        const updateData = req.body;
        const page = await updatePage(updateData);

        res.status(200).json({
            status: 200,
            response: page
        });
    } catch (err) {
        next(err);
    }
};

export {
    createPageController,
    getPagesController,
    getPageController,
    updatePageController
}
