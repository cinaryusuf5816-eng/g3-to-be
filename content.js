/* Edit the lesson and question content here. No build step is needed. */
window.BE_CONTENT = (() => {
  const version = 'be-grade3-v1';
  const scenes = {
    hero: {src:'assets/hero.png', alt:'Mia and Leo read together at a classroom desk.'},
    happy: {src:'assets/happy.png', alt:'Mia smiles happily in a classroom.'},
    park: {src:'assets/park.png', alt:'Two children, Mia and Leo, stand in a park with trees and a bench.'},
    tired: {src:'assets/tired.png', alt:'Leo rests on a sofa and yawns, looking very tired.'},
    cat: {src:'assets/cat.png', alt:'An orange cat is under a wooden table. The tabletop is empty.'},
    books: {src:'assets/books.png', alt:'Exactly three blue books are stacked on a wooden desk.'},
    teacher: {src:'assets/teacher.png', alt:'An adult teacher stands beside a blank chalkboard in a classroom.'}
  };
  const sections = [
    {id:'guided',title:'Guided Practice',short:'Practise together',description:'A little help, one step at a time.',icon:'spark',count:6,color:'teal'},
    {id:'choose',title:'Choose the Answer',short:'Choose the Answer',description:'Three choices. Find the best fit.',icon:'check',count:30,color:'blue'},
    {id:'fill',title:'Fill in the Blank',short:'Fill in the Blank',description:'Find the little word that is missing.',icon:'pencil',count:15,color:'peach'},
    {id:'build',title:'Build a Sentence',short:'Build a Sentence',description:'Put the words in the right order.',icon:'blocks',count:15,color:'teal'},
    {id:'truefalse',title:'True or False',short:'True or False',description:'Be a grammar detective.',icon:'split',count:12,color:'blue'},
    {id:'picture',title:'Picture Challenge',short:'Picture Challenge',description:'Look closely. What can you see?',icon:'picture',count:12,color:'peach'}
  ];
  const positive = [
    ['I','am','nine.'],['You','are','my friend.'],['He','is','happy.'],['She','is','at school.'],['It','is','small.'],['We','are','ready.'],['They','are','friends.']
  ];
  const subjects = [
    ['I','am','I am Mia.'],['You','are','You are kind.'],['He','is','He is Leo.'],['She','is','She is happy.'],['It','is','It is small.'],['We','are','We are friends.'],['They','are','They are at school.'],['Mia','is','Mia is happy.'],['The cat','is','The cat is small.'],['Mia and Leo','are','Mia and Leo are friends.'],['The books','are','The books are blue.']
  ];
  const contractions = [['I am',"I’m"],['You are',"You’re"],['He is',"He’s"],['She is',"She’s"],['It is',"It’s"],['We are',"We’re"],['They are',"They’re"]];
  const lessons = [
    {id:'about',title:'Little words. Big ideas.',label:'Meet am, is & are',summary:'Tell someone about a name, an age, a feeling, a thing or a place.',image:'happy',hint:'Tap an idea to see an example.',examples:[['Name','I am Mia.'],['Age','I am nine.'],['Feeling','She is happy.'],['A thing','It is small.'],['Place','They are at school.']]},
    {id:'match',title:'Find the right little word.',label:'Who goes with what?',summary:'Start with the person or thing. Then choose am, is or are.',image:'park',hint:'Tap a person or thing.'},
    {id:'positive',title:'Let’s make a sentence.',label:'Positive sentences',summary:'Say who or what. Add am, is or are. Then tell us more.',hint:'Tap a subject to change the sentence.'},
    {id:'short',title:'Same meaning. Fewer letters.',label:'Short forms',summary:'We often join two words. The little mark is an apostrophe.',hint:'Tap a pair to switch between its long and short form.'},
    {id:'negative',title:'A little “not” changes a lot.',label:'Negative sentences',summary:'Put not after am, is or are.',image:'tired',hint:'Tap “Add not” and watch the sentence change.'},
    {id:'questions',title:'Move it to the front.',label:'Ask a question',summary:'Put am, is or are first. Finish with a question mark.',hint:'Tap “Make a question” to move the words.'},
    {id:'answers',title:'A short answer says enough.',label:'Short answers',summary:'Listen to who the question is about. Then answer with the right person.',hint:'Choose a question. Tap Yes or No.'},
    {id:'recap',title:'You’ve met all three!',label:'A quick recap',summary:'One idea. Three ways to say it.',hint:'Switch between a statement, a negative sentence and a question.'}
  ];
  const questions=[];
  const add=(type,n,form,prompt,answer,options,explanation,extra={})=>{
    const opts=options ? [...options] : undefined;
    if(opts && type!=='truefalse'){const k=n%opts.length;opts.push(...opts.splice(0,k));}
    questions.push({id:`${type}-${String(n).padStart(2,'0')}`,type,form,prompt,answer,options:opts,explanation,...extra});
  };
  const guided=[
    ['I ___ Mia.','am',['am','is','are'],'Use am with I.','Start with I. Its special partner is am.'],
    ['Leo ___ my friend.','is',['am','is','are'],'Leo is one person. Use is.','Leo means he. Which word goes with he?'],
    ['Mia and Leo ___ at school.','are',['is','are','am'],'Mia and Leo are two people. Use are.','Two friends: think they.'],
    ['Make it negative: “She is tired.”','She is not tired.',['She not is tired.','She is not tired.','She are not tired.'],'Put not after is.','Keep She is. Put not before tired.'],
    ['Make a question: “They are ready.”','Are they ready?',['They are ready?','Is they ready?','Are they ready?'],'Move are before they.','A question starts with am, is or are.'],
    ['Mia asks you, “Are you happy?” Say yes.','Yes, I am.',['Yes, I am.','Yes, you are.','Yes, I’m.'],'Mia asks about you. Answer with I am.','You are answering about yourself. Use I.']
  ];
  guided.forEach((r,i)=>add('guided',i+1,i<3?'positive':i===3?'negative':'question',r[0],r[1],r[2],r[3],{hint:r[4]}));
  const choice=[
    ['positive','I ___ eight.','am',['is','are','am'],'Use am with I.'],
    ['positive','Choose the correct sentence.','She is my friend.',['She am my friend.','She is my friend.','She are my friend.'],'Use is with she.'],
    ['positive','Mia and Leo ___ friends.','are',['is','am','are'],'Two people: use are.'],
    ['positive','Choose the short form of “He is happy.”','He’s happy.',['He’re happy.','He’s happy.','He’m happy.'],'He is becomes he’s.'],
    ['positive','The cat ___ small.','is',['are','is','am'],'One cat: use is.'],
    ['positive','You ___ kind.','are',['am','is','are'],'Use are with you, for one person or more.'],
    ['positive','Choose the correct sentence.','We are at school.',['We is at school.','We am at school.','We are at school.'],'Use are with we.'],
    ['positive','Choose the long form of “They’re ready.”','They are ready.',['They is ready.','They are ready.','They am ready.'],'They’re means they are.'],
    ['positive','My teacher ___ nice.','is',['is','are','am'],'One teacher: use is.'],
    ['positive','The books ___ blue.','are',['am','are','is'],'More than one book: use are.'],
    ['negative','Make it negative: “I am late.”','I am not late.',['I not am late.','I am not late.','I are not late.'],'Put not after am.'],
    ['negative','Choose the short form of “She is not sad.”','She isn’t sad.',['She aren’t sad.','She isn’t sad.','She am not sad.'],'Is not becomes isn’t.'],
    ['negative','We ___ at home. Choose the negative form.','aren’t',['isn’t','aren’t','am not'],'Use are not or aren’t with we.'],
    ['negative','Choose the correct negative sentence.','They are not tired.',['They not are tired.','They is not tired.','They are not tired.'],'Put not after are.'],
    ['negative','Choose the long form of “It isn’t big.”','It is not big.',['It not is big.','It are not big.','It is not big.'],'Isn’t means is not.'],
    ['negative','Leo ___ eight. Choose the negative form.','isn’t',['aren’t','isn’t','am not'],'Leo is one person. Use isn’t.'],
    ['negative','Choose the correct short form.','I’m not hungry.',['I’mn’t hungry.','I’m not hungry.','I isn’t hungry.'],'I am not becomes I’m not.'],
    ['negative','The cats ___ small. Choose the negative form.','aren’t',['isn’t','am not','aren’t'],'More than one cat: use aren’t.'],
    ['negative','Make it negative: “You are late.”','You are not late.',['You not are late.','You is not late.','You are not late.'],'Put not after are.'],
    ['negative','Choose the long form of “He isn’t at school.”','He is not at school.',['He is not at school.','He are not at school.','He not is at school.'],'He isn’t means he is not.'],
    ['question','Make a question: “She is happy.”','Is she happy?',['Does she happy?','Is she happy?','Are she happy?'],'Put is before she.'],
    ['question','___ they at the park?','Are',['Am','Is','Are'],'Use are with they. Put it first.'],
    ['question','“Are you nine?” Say yes about yourself.','Yes, I am.',['Yes, I’m.','Yes, I am.','Yes, you is.'],'Use I in your answer. Do not shorten am in a yes answer.'],
    ['question','“Is Mia your friend?” Say yes.','Yes, she is.',['Yes, she’s.','Yes, they are.','Yes, she is.'],'Mia is she. Use the full word is in a yes answer.'],
    ['question','“Are the books red?” Say no.','No, they aren’t.',['No, it isn’t.','No, they aren’t.','No, they isn’t.'],'The books means they. Use aren’t.'],
    ['question','Make a question: “I am late.”','Am I late?',['Is I late?','Do I late?','Am I late?'],'Move am before I.'],
    ['question','Leo asks, “Am I right?” Say yes to Leo.','Yes, you are.',['Yes, I am.','Yes, you are.','Yes, he’s.'],'You are talking to Leo, so answer with you.'],
    ['question','“Is he tired?” Say no.','No, he isn’t.',['No, he aren’t.','No, he isn’t.','No, they aren’t.'],'Use isn’t with he.'],
    ['question','Choose the correct question.','Are Mia and Leo at school?',['Is Mia and Leo at school?','Are Mia and Leo at school?','Do Mia and Leo at school?'],'Two people: start with are.'],
    ['question','“Are you ready?” Say no about yourself.','No, I’m not.',['No, I’mn’t.','No, I isn’t.','No, I’m not.'],'Use I’m not when you answer about yourself.']
  ];
  choice.forEach((r,i)=>add('choose',i+1,...r));
  const fill=[
    ['positive','I ___ happy.',['am'],'Use am with I.'],
    ['positive','Mia ___ nine.',['is'],'Mia is one person. Use is.'],
    ['positive','We ___ in the classroom.',['are'],'Use are with we.'],
    ['positive','The dog ___ small.',['is'],'One dog: use is.'],
    ['positive','You ___ my friend.',['are'],'Use are with you.'],
    ['negative','I ___ tired.',['am not',"’m not","'m not"],'Use am not after I. I’m not is also correct.'],
    ['negative','She ___ at home.',['is not',"isn’t","isn't","’s not","'s not"],'Use is not, isn’t or ’s not after she.'],
    ['negative','They ___ sad.',['are not',"aren’t","aren't","’re not","'re not"],'Use are not, aren’t or ’re not after they.'],
    ['negative','The book ___ red.',['is not',"isn’t","isn't","’s not","'s not"],'One book: use is not or isn’t.'],
    ['negative','We ___ late.',['are not',"aren’t","aren't","’re not","'re not"],'Use are not or aren’t with we.'],
    ['question','___ I right?',['am'],'Use am before I.'],
    ['question','___ Leo at school?',['is'],'Leo is one person. Start with is.'],
    ['question','___ they your friends?',['are'],'Put are before they.'],
    ['question','___ the cat under the table?',['is'],'One cat: start with is.'],
    ['question','___ you ready?',['are'],'Use are before you.']
  ];
  fill.forEach((r,i)=>add('fill',i+1,r[0],r[1],r[2][0],r[0]==='negative'?['am not','is not','are not',"isn’t","aren’t"]:['am','is','are'],r[3],{accepted:r[2],instruction:r[0]==='negative'?'Use a negative form: am not, is not or are not. Short forms work too.':'Use am, is or are.'}));
  const build=[
    ['positive','I am nine.','Use am after I.'],
    ['positive','She is my friend.','Use is after she.'],
    ['positive','The cat is small.','One cat: use is.'],
    ['positive','We are at school.','Start with we, then are.'],
    ['positive','Mia and Leo are friends.','Mia and Leo are two people. Use are.'],
    ['negative','I am not late.','Put not after am.'],
    ['negative','He is not sad.','Put not after is.'],
    ['negative','They are not tired.','Put not after are.'],
    ['negative','The dog is not big.','Use is not for one dog.'],
    ['negative','You are not alone.','Use are not after you.'],
    ['question','Is she happy?','Start with is. Finish with a question mark.'],
    ['question','Are they at home?','Move are before they.'],
    ['question','Am I late?','Start with am, then I.'],
    ['question','Is the cat small?','One cat: start with is.'],
    ['question','Are Mia and Leo friends?','Two people: start with are.']
  ];
  build.forEach((r,i)=>{const tokens=r[1].replace(/([.?])/g,' $1').split(' ');const words=tokens.map((text,j)=>({id:`build-${i+1}-word-${j}`,text})).sort((a,b)=>((a.id.length*13+Number(a.id.split('-').pop())*7+i*11)%19)-((b.id.length*13+Number(b.id.split('-').pop())*7+i*11)%19));add('build',i+1,r[0],r[0]==='question'?'Build a question.':r[0]==='negative'?'Build a negative sentence.':'Build a positive sentence.',r[1],null,r[2],{words,accepted:i===4?['Mia and Leo are friends.','Leo and Mia are friends.']:i===14?['Are Mia and Leo friends?','Are Leo and Mia friends?']:[r[1]]});});
  const tf=[
    ['She are happy.',false,'She is happy.','Use is with she.'],
    ['I am nine.',true,'I am nine.','Use am with I.'],
    ['They are not at school.',true,'They are not at school.','Use are with they. Put not after are.'],
    ['Are he your friend?',false,'Is he your friend?','Use is with he.'],
    ['Yes, I’m.',false,'Yes, I am.','Use the full form in a positive short answer.'],
    ['Is the cat small?',true,'Is the cat small?','One cat: start with is.'],
    ['We isn’t tired.',false,'We aren’t tired.','Use aren’t with we.'],
    ['You are my friend.',true,'You are my friend.','You goes with are, even for one friend.'],
    ['No, she isn’t.',true,'No, she isn’t.','Isn’t is a correct short form of is not.'],
    ['The books is blue.',false,'The books are blue.','More than one book: use are.'],
    ['Mia and Leo are friends.',true,'Mia and Leo are friends.','Two people: use are.'],
    ['He not is at home.',false,'He is not at home.','Put not after is.']
  ];
  tf.forEach((r,i)=>add('truefalse',i+1,'mixed',r[0],r[1]?'True':'False',['True','False'],r[3],{correction:r[2],instruction:'Is the sentence correct?'}));
  const pictures=[
    ['happy','Choose the correct sentence.','She is happy.',['She is sad.','She is tired.','She is happy.'],'Mia has a big smile. She is happy.'],
    ['park','Where are the children?','They are at the park.',['They are at home.','They are at the park.','They are at school.'],'Look at the trees and the park bench. They are at the park.'],
    ['cat','Is the cat on the table?','No, it isn’t.',['Yes, it is.','No, it isn’t.','No, they aren’t.'],'The cat is under the table, not on it.'],
    ['books','Choose the correct sentence.','The books are blue.',['The books are red.','The books are blue.','The books are green.'],'All three books are blue. Use are with books.'],
    ['tired','How is Leo?','He is tired.',['He is angry.','He is tired.','He is sad.'],'Leo is yawning and resting. He is tired.'],
    ['teacher','Where is the teacher?','She is in the classroom.',['She is at the park.','She is in the classroom.','She is in the kitchen.'],'The chalkboard and desk show a classroom.'],
    ['books','Are the books under the desk?','No, they aren’t.',['Yes, they are.','No, they aren’t.','No, it isn’t.'],'The books are on the desk. Books means they.'],
    ['happy','Is Mia sad?','No, she isn’t.',['Yes, she is.','No, she isn’t.','No, they aren’t.'],'Mia is smiling. She is happy, not sad.'],
    ['teacher','Is the teacher in a park?','No, she isn’t.',['Yes, she is.','No, she isn’t.','No, it isn’t.'],'The teacher is inside a classroom.'],
    ['cat','Where is the cat?','It is under the table.',['It is on the table.','It is under the table.','It is in a box.'],'Look below the table. The cat is under it.'],
    ['park','Are both children indoors?','No, they aren’t.',['Yes, they are.','No, they aren’t.','No, he isn’t.'],'Both children are outside in a park.'],
    ['tired','Choose the correct sentence.','He is on a sofa.',['He is under a desk.','He is in a classroom.','He is on a sofa.'],'Leo is resting on a sofa.']
  ];
  pictures.forEach((r,i)=>add('picture',i+1,'mixed',r[1],r[2],r[3],r[4],{image:r[0]}));
  return {version,title:'Am, is & are',brand:'Be brilliant.',scenes,sections,lessons,positive,subjects,contractions,questions};
})();
