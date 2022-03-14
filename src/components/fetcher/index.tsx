import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Fetcher(url: string, variant: string) {

    const { data, error } = useSWR(
        url,
        fetcher
    );

    if (error) return (
        <div>"An error has occurred."</div>
    );
    if (!data) return (
        <div>"Loading..."</div>
    );

    if (variant === "user") {
        return (
            <div>
                <div className="title">User: {data.login}</div>
                <p>GitHub url: {data.url}</p>
                <strong>✨ Repos: {data.public_repos}</strong>{" "}
                <strong>🍴 Gists: {data.public_gists}</strong>{" "}
                <strong>👁 Followers: {data.followers}</strong>
            </div>
        );
    } else if (variant === "project") {
        return (
            <div>In preparation</div>
        );
    } else if (variant === "repo") {
        return (
            <div>

                <div className="title">REPO ID: {data.id}</div>
                <div>Repo Name: {data.name}</div>
                <div>Repo status: {data.private ? "private" : "public"}</div>

            </div>
        );
    } else {
        return (
            <div>TO DO</div>
        )
    }

}