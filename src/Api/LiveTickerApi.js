// Api implementation

export function LiveTickerCategory(id, name, status, competitors) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.competitors = competitors;
}

export function LiveTickerCompetitor(id, no, name, club, score_submitted, score_accomplished) {
    this.id = id;
    this.no = no;
    this.name = name;
    this.club = club;
    this.score_submitted = score_submitted;
    this.score_accomplished = score_accomplished;
}

