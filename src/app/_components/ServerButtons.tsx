"use client";

import { FC } from "react";
import { Clipboard } from "lucide-react";

import { GameServer } from "@/schemas";

const ServerButtons: FC<Props> = ({ server }) => (
	<>
		<div>
			<span className="text-white font-semibold text-base">{server.players.length} </span>
			<span className="text-white/30 font-normal text-sm">/ {server.maxplayers}</span>
		</div>
		<div className="tooltip tooltip-bottom" data-tip="Copy IP">
			<button className="btn btn-md btn-circle btn-ghost">
				<Clipboard onClick={() => navigator.clipboard.writeText(server.connect)} />
			</button>
		</div>
		<button
			className="btn border-none bg-linear-to-br from-[#5c16c6] to-[#9e12ca] hover:opacity-90 transition-opacity"
			onClick={() => (window.location.href = `cod4://${server.connect}`)}
		>
			Join
		</button>
	</>
);

type Props = {
	server: GameServer;
};

export default ServerButtons;
