//Navbar toggle
const navToggle = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', () => {
        // Toggle Navbar
        navList.classList.toggle('active');
        burger.classList.toggle('toggle');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
    });
}

const getRepoMembers = async () =>{
    const members = await (await fetch("https://api.github.com/orgs/chryz-hub/members", {
        headers: new Headers({
            "Authorization": 'token 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'
        })
    })).json();
    return members;
}

const getMembersInfo = async (memberLogin) =>{
    const memberInfo = await (await fetch(`https://api.github.com/users/${memberLogin}`, {
        headers: new Headers({
            "Authorization": 'token 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'
        })
    })).json();
    return memberInfo;
}

const memberTemplate = (index, avatar_url, name, location, bio) => {
    return `<div class="member-column">
    <div id="${index}" class="member-card">
      <img src="${avatar_url}" alt="${name}" style="width:50%; display: initial; border-radius: 50%;object-fit: scale-down;margin-left: 1px;margin-right: 1px;">
      <h3>${name}, ${location}</h3>
      <p>${bio}</p>
    </div>
  </div>`;
}

const populateList = async ()=>{
    const membersList = document.getElementById('members-list')
    getRepoMembers().then(members => {
        var allMembers = "<div class=\"member-row\">";
        members.forEach((member, index) => {
            getMembersInfo(member.login).then(memberInfo => {
                if((index+1) % 3 === 0 && index !== members.length - 1){
                    allMembers = allMembers + memberTemplate((index+1), memberInfo.avatar_url || "", memberInfo.name || "", memberInfo.location || "", memberInfo.bio || "") + "</div><div class=\"member-row\">";
                }else{
                    allMembers = allMembers + memberTemplate((index+1), memberInfo.avatar_url || "", memberInfo.name || "", memberInfo.location || "", memberInfo.bio || "");
                }
                if(index === members.length -1){
                    membersList.innerHTML = allMembers;
                }
            });
        });
    });
}

navToggle();
populateList();