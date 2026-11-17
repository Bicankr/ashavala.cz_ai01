import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
    Zoom,
} from "@mui/material";
import Link from "next/link";

type TProps = {
    title: string;
    subheader: string;
    text: string;
    avatarsrc: string;
    href: string;
};

export function CardLink(props: TProps) {
    return (
        <Zoom in={true}>
            <Link href={props.href} style={{ textDecoration: "none" }}>
                <Card
                    sx={{
                        width: "330px",
                        height: "200px",
                        ":hover": {
                            boxShadow: 20,
                        },
                        boxShadow: 10,
                        backgroundColor: "whitesmoke",
                        opacity: 0.9,
                    }}
                >
                    <CardHeader
                        avatar=<Avatar
                            src={props.avatarsrc}
                            sx={{ width: 56, height: 56 }}
                        ></Avatar>
                        title={props.title}
                        subheader={props.subheader}
                    ></CardHeader>
                    {/* <CardHeader
                        avatar=<Avatar sx={{ backgroundColor: "black" }}>
                            {props.avatarTitle}
                        </Avatar>
                        title={props.title}
                        subheader={props.subheader}
                    ></CardHeader> */}
                    <CardContent sx={{ m: 0, p: 1, pt: 0, height: 60 }}>
                        <Typography variant="body2" color="text.secondary">
                            {props.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ArrowRightAltIcon
                            sx={{ fontSize: 30, color: "black" }}
                        />
                    </CardActions>
                </Card>
            </Link>
        </Zoom>
    );
}
