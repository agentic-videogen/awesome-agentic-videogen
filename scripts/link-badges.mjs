// README-only link presentation, matching the reference Awesome list.
const badge=(label,image,target)=>`[![${label}](${image})](${target})`;
const staticBadge=(label,color,target,query='')=>badge(label,`https://img.shields.io/badge/${label}-${color}.svg${query}`,target);

export function githubRepositorySlug(link){
  if(!link)return null;
  let url;
  try{url=new URL(link);}catch{return null;}
  if(!['http:','https:'].includes(url.protocol)||!['github.com','www.github.com'].includes(url.hostname))return null;
  const parts=url.pathname.split('/').filter(Boolean);
  // Repository roots and file/tree views identify a repository. Issue threads,
  // wiki pages, profiles and other GitHub pages keep a plain Code badge.
  if(parts.length!==2&&!(parts.length>=4&&['tree','blob'].includes(parts[2])))return null;
  const [owner,repository]=parts;
  if(!/^[A-Za-z0-9-]+$/.test(owner)||!/^[-A-Za-z0-9_.]+$/.test(repository))return null;
  return `${owner}/${repository.replace(/\.git$/,'')}`;
}

export function renderResourceBadges(p){
  const links=[];
  if(p.code){
    const repository=githubRepositorySlug(p.code);
    links.push(repository
      ?badge('Star',`https://img.shields.io/github/stars/${repository}.svg?style=social&label=Star`,p.code)
      :staticBadge('Code','181717',p.code,'?logo=github&logoColor=white'));
  }
  const url=new URL(p.url);
  if(['arxiv.org','www.arxiv.org','export.arxiv.org'].includes(url.hostname)){
    links.push(staticBadge('arXiv','b31b1b',p.url));
  }else if(p.arxiv){
    links.push(staticBadge('arXiv','b31b1b',`https://arxiv.org/abs/${p.arxiv}`));
  }else{
    const label=['Paper','Survey','Benchmark'].includes(p.type)?'Paper':'Source';
    links.push(staticBadge(label,label==='Paper'?'b31b1b':'6c757d',p.url));
  }
  if(p.project)links.push(staticBadge('Website','9cf',p.project));
  // Keep the badge group together so GitHub tables do not shrink the wider
  // social Star badge into a narrow, individually wrapped links column.
  return links.join('&nbsp;');
}
