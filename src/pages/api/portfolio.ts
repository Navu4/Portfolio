// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "@/config/dbconnect";
import { getAboutData, getMetaData, getProjectData, getWorkData, updateWebsiteVisitCount } from "@/controller/portfolio";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message ?: string;
    data ?: string;
    success ?: boolean;
};

const PORTFOLIO_DATA_TYPE = {
    ABOUT : { id : 0, name : 'about', desc: "About Section" },
    WORK: { id : 1, name : 'work', desc: "My Work Section" },
    PROJECT: { id : 2, name : 'project', desc: "Project Section" },
    ALL: { id : 3, name : 'All', desc: "All Section Data" },

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "GET": {
            return getPortfolioData(req, res);
        }

        case "POST": {
            return updatePortfolioData(req, res);
        }
    }
    return res.status(400).json({ message: "Bad Request" });
}

async function getPortfolioData(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        let type : any = (req.query.type) || PORTFOLIO_DATA_TYPE.ALL.id;
        type = parseInt(type)
        let response : any = {}

        switch (type) {
            case PORTFOLIO_DATA_TYPE.WORK.id:
                let workDataRes = await getWorkData(); 
                response["work"] = workDataRes.work;
                break;
            case PORTFOLIO_DATA_TYPE.PROJECT.id:
                let projectDataRes = await getProjectData(); 
                response["project"] = projectDataRes.project;
                break;
        
            case PORTFOLIO_DATA_TYPE.ABOUT.id:
                let aboutDataRes = await getAboutData(); 
                response["about"] = aboutDataRes.about;
                break;
        
            case PORTFOLIO_DATA_TYPE.ALL.id:
                let allPromises = [getWorkData(), getAboutData(), getProjectData()]
                const responses = await Promise.all(allPromises)
                responses.forEach(res => {
                    response = {
                        ...response,
                        ...res
                    }
                })
            default:
                let allP = [getWorkData(), getAboutData(), getProjectData()]
                const resps = await Promise.all(allP)
                resps.forEach(res => {
                    response = {
                        ...response,
                        ...res
                    }
                })
                break;
        }

        let metaDataRes = await getMetaData();
        response["metaData"] = metaDataRes.metaData;

        return res.json({
            message: 'Data fetched successfully',
            data : JSON.parse(JSON.stringify(response)),
            success: true,
        });
    } catch (error : any) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }

}

async function updatePortfolioData(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const visitCount = req.body.visitCount;
        const id = req.body.id;
        await updateWebsiteVisitCount(id, visitCount);
        return res.json({
            message: 'Data added successfully',
            success: true,
        });
    } catch (error : any) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}