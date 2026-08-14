export type Role='USER'|'ADMIN';
export type Player={id:string;name:string;image_url:string;game:string;power:number;speed:number;defense:number;active:boolean;created_at:string};
export type Profile={id:string;display_name:string;role:Role;balance:number;created_at:string};
export type BetResult={bet_id:string;match_id:string;winner_id:string;status:'WON'|'LOST';payout:number;new_balance:number};
