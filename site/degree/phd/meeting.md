# Minutes of Meeting

<!-- markdownlint-disable MD033 -->
## 7 Oct 2019

<Meeting index="46" members="Bob, Mohammed, Wang" date="7 Oct 19 11:00" nextDate="15 Oct 19 11:00">

::: slot topic

- Natural language processing of symptoms documented in free-text narratives of electronic health records: A systematic review
- NLPReViz: An interactive tool for natural language processing on clinical text

:::

::: slot prog

- Camcorder ordered
- First draft of survey intro
- Table of papers vs technique
- Attempt to sign up for UK Biobank
- Matrix for Thumbnail View
- Next version of CGVC website
- New CGVC logo
- List of past CGVC conferences added
- Got CGVC 2018 from Richard
- Sponsors updated
- Committee updated

:::

::: slot todo

- [ ] Try citing the big UK NHS IT system in survey intro
- [x] Next paper summary: NLPReViz
- [x] Add "Natural language processing of symptoms documented in free-text narratives of electronic health records: A systematic review" to survey related work
- [x] Try ASCII graphics for border between Thumbnail Views
- [x] User clicks on a Thumbnail View to bring up the corresponding Focus View
- [x] Start building sort options: length of letter, chronological
- [ ] Keep track of how many records you have to update manually (regex cases)
- [x] Replace filename by ID number -> -----nn----- which resembles a separator
- [x] Tong has 3 papers (87, 88, 96 on Bob's publication page)
- [x] Add Public Health England and Project Tycho to the list of public datasets
- [x] CGVC website
    - [x] Match EG and EGUK logo sizes
    - [x] Add the dragon logo
    - [x] Add CGVC 2018 in original format
    - [x] Make external links to be opened in a new tab
    - [x] Add important dates up to month+year
    - [x] Next version of menu with reorganization
    - [x] Add CGVC 2018 proceedings

:::

</Meeting>

## 1 Oct 2019

<Meeting index="45" members="Bob, Mohammed, Wang" date="1 Oct 19 11:00" nextDate="8 Oct 19 11:00">

::: slot topic

- Bob away from 18-31 Oct at VIS
- digital.nhs.uk
- Idea: Thumbnail View wraps around to the beginning (infinite scrolling)
- Vue: javascript library
- eg.org - Eurographics webpage

:::

::: slot prog

- Research on camcorders
- Abort symmetric scrolling
- Context Thumbnail View, color is semi-transparent
- Attempt to render 200 documents
- User clicks on separator which brings letter into focus
- Reduction in whitespace for Thumbnail View
- Bob calls Franck
- Next draft of survey: overview table - papers on y-axis: NLP, ML, ESS, Geospacial, other
- Next paper summary

:::

::: slot todo

- [x] Find microphone for Sony CX450
- [x] Order microphone + CX450 with budget code
- [x] Cite Chao's papers to survey (cartographic treemaps)
- [x] Start compiling a table of public EHR data sources for survey
- [ ] Add in a test for visible thumbnails
- [ ] Try wrapping the Thumbnail View around in a loop (infinite scrolling)
- [x] Try to add a view with a matrix of Thumbnail Views (with adjustable width)
- [x] CGVC 2020 webpage: replace unknown context with "TBA"
- [x] Add TPCG to CGVC webpage for history
- [x] Update links to past CGVCs
- [x] Ask Richard for the latest version of CGVC 2018 content
- [x] Change IEEE logo to Eurographics
- [x] Add names and titles to CGVC committees
- [x] Add an "important dates" as TBA
- [x] Search Pacific Vis for related papers
- [x] Cite Bob's eHealth on the Horizon in introduction
- [ ] Checkout UK Biobank for interesting EHR datasets
- [ ] Discuss innovative ways for sorting documents with Bob
- [x] Next paper summary
- [ ] Discuss next paper summary with Bob:
    - NLPReViz
        - [Website and video](https://nlpreviz.github.io)
        - [Paper](https://share.henry.wang/weU92P/Zhm5iXYcbK+)
    - [Natural language processing of symptoms documented in free-text narratives of electronic health records: a systematic review](https://share.henry.wang/EIo2wh/snRpftwKPq+)

:::

</Meeting>

## 24 Sep 2019

<Meeting index="44" members="Bob, Mohammed, Wang" date="24 Sep 19 11:00" nextDate="1 Oct 19 11:00">

::: slot topic

- Drugs, prisons
- Swansea uni preferred supplies: insight.com, stonegroup.co.uk, xma.co.uk, academia.co.uk
- Symmetric scrolling
- Idea: compute an average letter (number of lines)
- Idea: scatterplot matrix view
- Sketch engine

:::

::: slot prog

- Next draft of survey
- Next paper summary
- Fit 1st page of detail view on screen without scrolling
- 70-75 lines on average page
- First version of CGVC web page

:::

::: slot todo

- [x] Choose a camcorder + microphone for Bob
- [ ] Create subsections a list of papers that
    - [x] Use machine learning (ML)
    - [x] Use natural language processing (NLP)
    - [x] Use event sequence (ES)
    - [ ] Others
- [x] Create a new table - paper on y-axis, ML, NLP, ES and others on x-axis
- [x] Abort symmetric scrolling for now - remove Detail View scrolling
- [x] Change background color of non-focus Thumbnail View to grey
- [x] Try loading all 200 documents
- [x] See if you can reduce the white space in Thumbnail View
- [x] Explore ways to get smaller Thumbnail Views - 10 on screen
- [x] Read "Considerations for Visualization Comparison" by Michael Gleicher
- [x] Make CGVC 2020 webpage live
- [x] Ask Franck for link to CGVC 2019 web page
- [x] Move "about" content to homepage
- [x] Use CGVC 2018 terminology and context to set up initial 2020 web page (2020 at KCL, chaired by Rita Borgo)
- [x] Ask if Carlo's brother will make a logo
- [x] Ask Franck for history URLs to previous CGVC conferences
- [x] Next paper summary
- [x] Discuss next paper summary with Bob:
    - T. Gschwandtner. Visualization of patient data and treatment plans: A survey. Asgaard-TR-2009-1. Technical report, Vienna University of Technology, Institute of Software Technology and Interactive Systems, 2009
    - CareVis(2006) and CareCruiser

:::

</Meeting>

## 17 Sep 2019

<Meeting index="43" members="Bob, Mohammed, Wang" date="17 Sep 19 11:00" nextDate="24 Sep 19 11:00">

::: slot topic

- CGVC artwork
- 2 Oct 2019 to training 13:30

:::

::: slot prog

- Bob purchases cgvc.org.uk
- Applied for TA training
- Next version of scrolling
- Draft description of overview table
- Next paper summary

:::

::: slot todo

- [ ] Set up a CGVC web page on GitHub for all future CGVC conferences - model after VIS conference
- [x] Try adding an empty letter to handle boundary condition at the end of scrolling
- [ ] Make scrolling symmetric
- [ ] Use 10 letters as your default number of documents
- [X] Fit 1st page of detail view on screen without scrolling
- [x] Use original letters to derive an average number of lines per page
- [X] Print out description of overview table
- [x] Expand description of UMLS - who uses it? Where does it originate? How old is it? Why was it created?
- [X] Compare UMLS with SNOMED
- [x] Next paper summary

:::

</Meeting>

## 10 Sep 2019

<Meeting index="42" members="Bob, Mohammed, Wang" date="10 Sep 19 11:00" nextDate="17 Sep 19 11:00">

::: slot topic

- Henry
- Joss Whittle
- Salutation
- File strip analogy
- Camera

:::

::: slot prog

- Next draft of overview table
- Show highlighted numbers in Detail View
- 1st version of synchronize scrolling
- Paper summary

:::

::: slot todo

- [x] Apply for teaching assistant position
- [x] Save a confirmation that you applied as a TA
- [x] Write a description of overview table
- [ ] Fit detail view on a screen without scrolling
- [x] Smooth synchronize scrolling, "real-time" scrolling
- [x] Or try align scrolling by using separators
- [x] Google scrolling and visualization for research literature
- [x] "Line Numbers" unnecessary in File strip view
- [x] Next paper summary

:::

</Meeting>

## 3 Sep 2019

<Meeting index="41" members="Bob, Mohammed, Wang" date="3 Sep 19 11:00" nextDate="10 Sep 19 11:00">

::: slot topic

- Gate YouTube videos
- Evaluation: how much evaluation is enough?
- Cars
- Setting a default folder for letter sources
- An even smaller Thumbnail View?
- Visualization neo-natal spells - in scope
- Temporal event sequence simplification - in scope
- Data Vis tools ... - related work
- Visual analytics on EHR ... - related work
- GitHub for CGVC 2019 web page
- Comparing cohorts of event sequences - meta-data folder
- Finally enrolled

:::

::: slot prog

- 1st draft of overview table for survey based on UMLS
- Gate working
- Separator added to Thumbnail and Focus View
- Add Detail View
- Paper summary

:::

::: slot todo

- [x] Use "cancer" as parent for "prostate cancer"
- [x] Show highlighted numbers in Detail View
- [ ] Synchronize scrolling of Thumbnail view and Focus view
- [x] Next paper summary
- [x] Next draft of overview table

:::

</Meeting>

## 20 Aug 2019

<Meeting index="40" members="Bob, Mohammed, Wang" date="20 Aug 19 11:00" nextDate="2 Sep 19 11:00">

::: slot topic

- SNOMED, UMLS
- VLTK dispersion plot

:::

::: slot prog

- New microphone via ABW
- Removed dropzone
- Resize with aspect ratio
- PhenoLines summary

:::

::: slot todo

- [x] Try SNOMED or UMLS on the y-axis and number of patients on the x-axis
- [x] Fix bug when adding documents
- [ ] Set a default folder for letter sources
- [x] Add a separator to Thumbnail view and Focus view
- [x] Add Detail view - checkbox in top-right corner of Thumbnail view and Focus view
- [ ] Synchronize scrolling of Thumbnail view and Focus view
- [x] Start a new folder called "meta-patient-data"
- [x] Use google cite seer to find more papers
- [x] Next summary [Download](https://share.henry.wang/hkTOpZ/9DZ4QXdN6q+)
- [x] RadStream - add to out of scope section
- [x] SepVis - meta-patient-data folder
- [x] PROACT - meta-patient-data folder
- [x] Tumor control models - out of scope
- [x] Echo - meta-patient-data folder

:::

</Meeting>

## 13 Aug 2019

<Meeting index="39" members="Bob, Elif, Wang" date="13 Aug 19 11:00" nextDate="20 Aug 19 11:00">

::: slot topic

- Rich's laptop - we have an extra now
- Medical dictionary
- UMLS
- Vis USB sticks

:::

::: slot prog

- Correspondence with cosorders
- First step at redesign - 3 level in parallel with 1 document
- Training prodigy continued
- Copied USB sticks
- Next 3 paper summaries: PhysioEX, DecisionFlow, IDMVis

:::

::: slot todo

- [x] Try ordering new equipment via ABW
- [x] User option: add N documents (all by default)
- [x] Remove dropzone section, add "Add files" as a menu option
- [x] User option: resize heatmap, thumbnail view (diagonally) and focus view (resize everything)
- [ ] Try using SNOMED dictionary
- [x] Add a new overview table to survey - medical focus vs number of patients
- [x] Next summary - identified some papers [Download them](https://share.henry.wang/VyShO8/2583OwZYYX+)
- [x] Keep maintaining existing tables in the survey

:::

</Meeting>

## 16 July 2019

<Meeting index="38" members="Bob, Mohammed, Wang" date="16 July 19 11:00" nextDate="13 Aug 19 11:00">

::: slot topic

- Training event
- Summer school
- Wang holiday from 17 July to 11 August

:::

::: slot prog

- 2 day training event - medical school Swansea
- Watched MoorVis video
- Looked at "State-of-the-art report of visual analysis for event detection in text data streams"
- Started an overview table of literature review paper
- Received license for Prodigy
- Installed Gate on mac
- Paper summary - Doccurate

:::

::: slot todo

- [x] Follow up with Julie about the order
- [x] Ask cosorders@swanswa.ac.uk for advice on ordering new equipment
- [x] User option to show original latter (with highlighted numbers) over to the right
- [x] Try updating visual design according to sketch on the back
- [x] Training prodigy
- [x] Test gate
- [x] Next 3 summaries
- [ ] Search vispubdata for related papers
- [x] add "Medical focus" to all survey paper summary

:::

</Meeting>

## 9 July 2019

<Meeting index="37" members="Bob, Mohammed, Wang" date="9 July 19 11:00" nextDate="16 July 19 11:00">

::: slot topic

- Training event
- Summer school
- Wang holiday from 17 July to 11 August

:::

::: slot prog

- 2 day training event - medical school Swansea
- Watched MoorVis video
- Looked at "State-of-the-art report of visual analysis for event detection in text data streams"
- Started an overview table of literature review paper
- Received license for Prodigy
- Installed Gate on mac
- Paper summary - Doccurate

:::

::: slot todo

- [ ] Follow up with Julie about equipment order
- [x] Ask Mohammed for a link to MoorVis video
- [x] Get VL speaker names and talk title: Owen Pickrell, Arron Lacey
- [x] See todo list from 2 July 2019
- [ ] Compare libraries for classifying numbers
- [x] Next paper summary - look out for what libraries researchers use
- [x] Try draft of "Scope Section"

:::

</Meeting>

## 2 July 2019

<Meeting index="36" members="Bob, Mohammed, Wang" date="2 July 19 11:00" nextDate="7 July 19 11:00">

::: slot topic

- Digest
- Survey scope - focus, out of focus
- TexShop
- SciKit, SciKit-learn
- Prodigy, Explosion AI
- Backup use sticks
- Impact factors

:::

::: slot prog

- Color-coded according to length
- Testing NLTK, Gate, Spacy
- Asked for license for Prodigy
- Classification of phone numbers and nhs numbers with spacy
- Next paper summary
- Interview summary and archive - Arron Lacey

:::

::: slot todo

- [x] Ask Mohammed for a copy of MoorVis
- [x] Follow up with Julie about equipment order
- [x] Have a look at "State-of-the-art report of visual analysis for event detection in text data streams"
- [ ] User option: color mapping numbers based on category or length
- [x] Continue testing out NLTK, Gate and space
- [x] Add a color legend
- [x] User option: color map the overview plot
- [x] Add ability to expand letters to full length (remove the collapse exclusion)
- [x] On-mouse-over for numbers to show entire paragraph
- [x] Next paper summary
- [x] Placing USB sticks in an archive
- [x] Start building table that summarizes EHR papers

:::

</Meeting>

## 27 June 2019

<Meeting index="35" members="Bob, Carlo, Wang" date="27 June 19 11:00" nextDate="2 July 19 11:00">

::: slot topic

- Meetings are scheduled to Tuesdays
- Observe meetings on Monday
- NLTK
- Gate
- Spacy
- GPE - geopolitical entity
- SNOMED
- UMLS (unified medical language system)
- Prodigy

:::

::: slot prog

- Next EHR paper summary
- Interview with Arron Lacey
- Classified numbers with Spacy

:::

::: slot todo

- [x] Check SoS paper for event sequence visualization
- [x] Next EHR paper summary
- [x] Summarize interview with Arron Lacey [link](https://share.henry.wang/ZCksVT/DtjefH8V5V+)
- [x] Archive interview audio with Arron Lacey [link](https://share.henry.wang/69ePTJ/mvmq8w24rb+)
- [ ] Look for next interviewee
- [ ] Try gate/nltk to identify numbers, compare with Spacy
- [x] Upload minutes of meetings with NWIS (append with Helen)
- [x] Capture phone numbers
- [x] Color coding numbers based on length

:::

</Meeting>

## 20 June 2019 with Helen Thomas (NWIS)

<Meeting index="34" members="Helen Thomas, Gareth John, Wendy Dearing, Tim O’Sullivan, Jeffrey Herschel Giansiracusa, Bob, Wang" date="20 June 19 13:00">

::: slot topic

- End of July, deadline for EPSRC bid
- Access to data
- Co-supervision, secondments
- ONS census data
- ATOS
- Radiology reports
- Image analysis
- Letters, 20 million
- Patient reports of cancer outcomes
- SNOMED - ontology to describe clinical terminology
- Systemized nomenclature standard
- Gate from Sheffield University
- Visualize pathways through NHS
- Call centre playlist
- Healthcare playlist

:::

</Meeting>

## 20 June 2019

<Meeting index="33" members="Bob, Wang" date="20 June 19 10:00" nextDate="27 Jun 19 11:00">

::: slot topic

- EZY Vegan
- NLTK
- Microphone + tripod

:::

::: slot prog

- Vis papers uploaded to Mendeley
- Next EHR paper summary
- Summary of interview with Sam Turner
- A4 aspect radio
- Document white space preserved

:::

::: slot todo

- [x] Bob add link to swanseavis.com
- [x] For next summary, collect data on the number of patients visualized. try to derive from examples if not disclosed explicitly
- [ ] Start a summary table of EHR Vis papers
- [x] Next EHR paper summary
- [x] Modify/update interview questions
- [x] Shorten text lines
- [x] Color-code numbers based on type - start with the easiest first and most difficult last (look at NLTK)
- [x] Prioritize IEEE Vis and EuroVis papers over the VAHC for literature review
- [x] Order microphone and tripod for Bob

:::

</Meeting>

## 12 Jun 2019

<Meeting index="32" members="Bob, Dylan, Elif, Wang" date="12 June 19 11:00" nextDate="20 Jun 19 11:00">

::: slot topic

- Page layout visual designs
- Helen Thomas - NWIS (next meeting on train)
- Wang away for training courses on 4-5 July

:::

::: slot prog

- Derived 100 chars per line based on 10 word documents
- Line breaks introduced for paragraphs
- Grey line thickness is mapped to number of lines between numbered lines
- Rainbow color heatmap for overview
- Interview with Sam Turner (20 minutes)

:::

::: slot todo

- [ ] Choose a paper session for EuroVis 2019 conference report
- [x] Display whole line whenever a number appears (previously discussed as context-view)
- [x] Preserve A4 size aspect ratio
- [x] Preserve original white space when showing lines with numbers
- [ ] Use MedGate to classify numbers
- [x] Ask Mohammed if he recommends any book on NLP
- [ ] Have a look through introduction to text visualization book
- [x] Archive interview with Sam Turner [link](https://share.henry.wang/CBZhbi/IJeMfQfCAa+)
- [x] Write interview summary with Sam Turner [link](https://share.henry.wang/Ol28NG/U6mJQOUzDZ+)
- [x] Arrange the next interview, on 25th July with Arron Lacey
- [x] Add short description of data source to each paper summary
- [x] Next paper summary
- [x] Find a tripod and directional microphone for Bob's camcorder
- [x] Bob send Sony camcorder model number to Wang
- [x] Present at conference tomorrow
- [x] Trip to Cardiff on 20 June 2019

:::

</Meeting>

## 30 May 2019

<Meeting index="31" members="Bob, Dylan, Elif, Wang" date="30 May 19 11:00" nextDate="14 Jun 19 11:00">

::: slot topic

- Bob away for EuroVis
- LaTex formation guidelines

:::

::: slot prog

- Expand/collapse original text
- Summary of Regression Explorer

:::

::: slot todo

- [x] Prepare a poster for CoS DTC conference on 13 June 2019
- [x] Interview Sam Turner on 7 June 2019
- [x] Derive an average number of words/lines and use that as the limit for paragraphs
- [x] Try to base thumbnail view on original printed document format
- [x] Focus text position replaces position in printed file
- [x] Try reduce white space between lines by 50%
- [x] Grey line thickness reflecting number of lines between numbered lines
- [x] A rainbow color heatmap for overview
- [ ] Start classifying numbers: postcodes, measurements, dates, times, NHS numbers, hospital numbers, patient weights/heights
- [ ] Look for books on NLP
- [x] 2 paper summaries

:::

</Meeting>

## 23 May 2019

<Meeting index="30" members="Bob, Dylan, Elif, Wang" date="23 May 19 11:00" nextDate="30 May 19 11:00">

::: slot topic

- Ideas: Heatmap overview of all letters
- Categorize numbers: Postcodes, measurements, dates, times, NHS numbers, hospital numbers, patient weights/heights

:::

::: slot prog

- Next draft of interview questions
- Thumbnail view of number positions
- Tooltips for individual numbers on thumbnail view
- Next draft of survey summaries

:::

::: slot todo

- [ ] Record interview with Sam Turner (audio only)
- [ ] Add "context" text to detail view on either side of number
- [ ] Try to base thumbnail view on original document format
- [ ] Focus text position reflects actual position on original line
- [x] User option: expand or collapse original text
- [x] Grey line thickness reflects number of lines between numbers in documents
- [x] "Permanent" proof-read by Carlo
- [x] Try summarize a VIS 2018 paper (Regression Explorer)

:::

</Meeting>

## 17 May 2019

<Meeting index="29" members="Bob, Wang" date="17 May 19 11:00" nextDate="24 May 19 11:00">

::: slot topic

- NY Times data: 1987-2007, 3.3 GB, $300
- College of Science Doctoral Training Center
- ngrest
- Owen Pearson, Robert Powell, visible lunch on 4th July

:::

::: slot prog

- Next draft of survey summaries
- Tested c++ backend servers
- 200 patient letters
- draft of interview questions

:::

::: slot todo

- [x] Look at Doctoral Training Center webpage
- [x] Next draft of survey summaries
- [ ] Ask Carlo to prof-read your writing before showing to Bob
- [x] Rename patient letters
- [x] Try thumbnail view of number positions [Live Demo](https://healthvis.henry.wang/#/markup)
- [x] Next draft of interview questions
- [ ] Choose 1-2 vis 2018 paper to summarize

:::

</Meeting>

## 2 May 2019

<Meeting index="28" members="Bob, Carlo, Wang" date="2 May 19 14:30" nextDate="18 May 19 11:00">

::: slot topic

- Histogram
- C++ and OpenGL are good for large dataset size and speed + cross-platform
- Using dashboard methods to visualize multiple patient histories
- Charticulator + D3
- Bob away next week at Eurographics 2019

:::

::: slot prog

- Histogram of A&E admittance 2017 in 5 year intervals
- Highlight number for MedGate - first draft
- Summary of west15innovative - first draft
- PhD application

:::

::: slot todo

- [x] Copy 2017 VIS usb stick and look for relevant papers
    - [Equity Monitor: Visualizing Attributes of Health Inequity in Atlanta](http://xiaoxuezhang.info/health_viz_project/)
- [ ] Histogram of population by age in 1 year intervals
- [ ] Screen capture dashboard overview of SAIL databank
- [x] Highlight lines with numbers: web-based frontend and c++ server end - use 200 letters as input (use QT libraries)
- [x] Next draft of west15 summary
- [x] Next draft of rind11 summary
    - You may need to add diagrams for classification
- [x] Lowri ext 2369 for PDR
- [x] Apply for PhD

:::

</Meeting>

## 25 Apr 2019

<Meeting index="27" members="Bob, Dylan, Elif, Wang" date="25 Apr 19 11:00" nextDate="2 May 19 11:00">

::: slot topic

- Tesla
- 200 patient records/letters

:::

::: slot prog

- 1st survey paper summary
- Started reading chapter 2 of QT book

:::

::: slot todo

- [x] Print out survey paper summary for Bob to review
- [x] Add the followings to survey paper summary:
    - [x] Classification
    - [x] Future Challenges
    - [x] Unsolved Problems
    - [x] Papers Cited
    - [x] Years Spanned
- [x] Follow Bob's file naming convention: surname of first author, year, first significant word of title (eg: laramee2011interactive)
- [X] Summarize West et.al 2014
- [x] Copy Vis 2018 USB and look for related papers on EHR vis
- [x] Look at the following papers:
    - **bernard2019dashboard**, Using dashboard networks to visualize multiple patient histories
    - **kwon2019retain**, RetainVis: Visual Analytics with Interpretable and Interactive Recurrent Neural Networks on Electronic Medical Records
    - **mccurdy2019framework**, A framework for externalizing implicit error using visualization
- [x] Histogram of population by age in 1 year intervals [Live Demo](https://healthvis.henry.wang/#/histogram)
- [x] User option: highlight "numbers" for MedGate [Live Demo](https://healthvis.henry.wang/#/markup)
- Draft a list of interview questions for EHR domain experts
    1. Please provide a brief description of your job.
    1. What general topic area(s) does your research(s) cover?
    1. What are your research objectives?
    1. Do you have any hypotheses? What are your unsolved problems?
    1. What general types of dataset are common in your research (e.g. numerical data, text documents, images, etc.)?
    1. On average, what is the size of dataset do you generally work with? (e.g. 5,000 rows of CSV, 3,000 images, etc.)
    1. What methods do you use to analyse the data (e.g. statistical, excel, document analysis tools, etc.)?
    1. What methods or tools do you use to get the “bigger picture” about your collections of results?
    1. What are the areas of improvement you'd like to see in the tools you use for your research(s) (e.g. data processing speed, interactive functions, user-friendliness etc.)?
    1. If you could find out anything in your research(s), what would that be?

:::

</Meeting>

## 18 Apr 2019

<Meeting index="26" members="Bob, Carlo, Dylan, Elif, Wang" date="18 Apr 19 11:00" nextDate="25 Apr 19 11:00">

::: slot topic

- Manage 8+ million documents
- GATE extracts structured text from unstructured text
- People: gender, age, weight
- UKsERP
- Trent Reed - Qt tutorial

:::

::: slot prog

- 5 interview papers found
- Get Qt demo program running
- Read CQT book chapter 1
- VAHC mailing list
- Read Chao's paper

:::

::: slot todo

- Take screenshots/demo video of MedGate
- Summarize: Interactive Information Visualization to Explore and Query Electronic Health Records, liaise with Carlo on how to summarize a survey
- Watch Bob's tutorial on how to read a vis paper, read Step 1 of PVSK
- Upload PDFs of interview papers to CS server
- Step 1 MedGate: generate a histogram of population by age
- Read chapter 2 of CQT book
- Draft a list of interview questions for EHR domain experts
- Read section 1.3 literature search methodology of How to Write A Vis Survey Paper
- Search for recent EHR surveys on vis

:::

::: slot todoProg

- Interview papers on HealthVis ([download all](https://share.henry.wang/Cog0Gx/OMk965gfM3+)):
    1. [Zakkar2017](https://share.henry.wang/tBKUcP/n9qpRDZ4N1+): 7 domain experts, knowledge gaps
    1. [Rind2010](https://share.henry.wang/1pVAjO/obEaY8j4mP+): 5 physicians, software requirement gathering
    1. [Menger2016](https://share.henry.wang/c8IhNd/tKAEPMfg3P+): 19 expert sessions, cross industry collaboration
    1. [Robinson2009](https://share.henry.wang/FBJDBP/7qOiF85hr3+): 8 analysts, comes with interview questions
    1. [Ahn2014](https://share.henry.wang/d0psFX/2rhzroiXAB+), which is APS14 from SoS: 12 experts, not on HealthVis though

- Recent EHR survey papers:
    1. [West2015](https://share.henry.wang/9lUBUK/qByGMWZ9RJ+)

- Recent EHR paper:
    1. [Rogers2018](https://share.henry.wang/NAx8OS/3um69xtMPR+)

:::

</Meeting>

## 11 Apr 2019

<Meeting index="25" members="Bob, Dylan, Elif, Wang" date="12 Apr 19 11:00" nextDate="18 Apr 19 11:00">

::: slot topic

- Improve Healthcare with Interactive Visualization
- HealTac 2019 24-25 April in Cardiff
- Interview with Medical Experts
- Mendeley

:::

::: slot prog

- Read Bob's Healthcare Vis Bio
- Read SOS survey and medical visualization surveys
- HEOR form signed and scanned

:::

::: slot todo

- Take a screen capture demo of MedGate
- Check out the VAHC - Visual Analytics in Healthcare, sign up on mailing list
- Read Chapter 1 of CQT book
- Try QT demo program - including OpenGL examples
- Read Chao's paper on Cartograms with Features
- Search for survey papers on Healthcare Vis
- Look for recent books on Healthcare Vis
- Look at Dylan's survey of information visualization books
- Think about first project direction
- Think about literature survey
- Start writing a list of interview questions
- Look for Vis papers on interviewing domain experts
- Read [KKC14] from SoS
- Read [APS14] from SoS

:::

::: slot todoProg

- MedGate screenshots: none as the server was not accessible due to hardware upgrade, but nothing exciting at the moment for DataVis
- VAHC mailing list pending approval
- Chao’s paper read
- Qt and OpenGL set up, tried some demos, starting on [Qt with OpenGL](https://www.trentreed.net/topics/qt-framework/)
- Chapter 1 of CQT Book read
- Survey papers on HealthVis:
    - [Rind2011a](http://www.cs.umd.edu/hcil/trs/2010-19/2010-19.pdf): reviews existing EHR Vis systems, leads to 6 other survey papers
- Books on HealthVis:
    - [Healthcare Data Analytics](https://www.amazon.com/Healthcare-Analytics-Chapman-Knowledge-Discovery/dp/1482232111)
    - Most of the books mention on DataVis briefly, focus more on data analytics, mining, machine learning etc.
- Interview questions are still WIP, found some [examples](http://www.personal.psu.edu/acr181/IV09.pdf) from Robinson2009
- Possible project direction:
    - A dashboard with widgets/sections for visualising different diseases/conditions for patients
    - Make use of SAIL’s data, and its close contacts with domain experts
- KKC14 and APS 14 from SoS read
- Interesting findings:
    - A gallery of HealthVis: [vizhealth](http://www.vizhealth.org/gallery/)
    - Ben Shneiderman wins again
    - [David Borland](https://renci.org/staff/david-borland/), University of North Carolina at Chapel Hill, has many HealthVis-related papers:
        - [West2015](http://www.ncbi.nlm.nih.gov/pubmed/25336597)
        - [Gotz2016](https://ieeexplore.ieee.org/document/7466736/)

:::

</Meeting>

## 5 Apr 2019

<Meeting index="24" members="Bob, Dylan, Elif, Wang" date="5 Apr 19 11:00" nextDate="11 Apr 19 11:00">

::: slot topic

- Project partners:
    - We Predict
    - Digital Health Labs
    - Health Economics Outcomes Research (HEOR)
    - Connected Health Cities
- Meeting schedule

:::

::: slot prog

- Bob sent a copy of bid

:::

::: slot todo

- Scan the signed copy of HEOR form
- Upload minutes of meeting to CS Web
- Continue the minutes from master's
- Read the project bid

:::

</Meeting>

## 4 Apr 2019

<Meeting index="23" members="Bob, Wang, Carlo" date="4 Apr 19 11:00" nextDate="5 Apr 19 11:00">

::: slot topic

- First year target: first draft of a survey paper, and a draft of its project implementation
- Survey of Healthcare
- Project ideas: Healthcare text vis, glyph-based cartograms
- Public Health England

:::

::: slot prog

- New desk, new PC, new visa!
- New employment contract

:::

::: slot todo

- Keep bugging Julie Pollard about card access
- Print out HEOR NDA
- Apply PhD bursary
- Look at Bob's project descriptions
- Read Liam's SoS paper
- Read Chao's paper on Cartograms with Features

:::

</Meeting>
