import { Avatar, Card, CardHeader, Zoom } from "@mui/material";
import Link from "next/link";

type TProps = {
    title: string;
    avatarTitle: string;
    text: string;
    href: string;
    avatarsrc: string;
};

export function CardLinkHeader(props: TProps) {
    return (
        <Zoom in={true}>
            <Link href={props.href} style={{ textDecoration: "none" }}>
                <Card
                    sx={{
                        ":hover": {
                            boxShadow: 20,
                        },
                        boxShadow: 10,
                        backgroundColor: "whitesmoke",
                        opacity: 0.9,
                    }}
                >
                    <CardHeader
                        sx={{
                            "& .MuiCardHeader-title": {
                                fontSize: "25px",
                            },
                        }}
                        avatar=<Avatar
                            src={props.avatarsrc}
                            sx={{ width: 56, height: 56 }}
                        ></Avatar>
                        title={props.title}
                        subheader={props.text}
                    ></CardHeader>
                    {/* <CardContent sx={{ m: 0, p: 0, pt: 0, mb: 0, pb: 0 }}>
                        <KeyboardBackspace
                            sx={{ fontSize: 30, color: "black" }}
                        />
                    </CardContent> */}
                </Card>
            </Link>
        </Zoom>
    );
}
