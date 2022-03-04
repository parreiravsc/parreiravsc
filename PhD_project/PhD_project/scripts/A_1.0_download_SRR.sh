#!/bin/bash

# it is the first step to my PhD project
#download RNA sequencing reads by bash terminal using prefecth 
# for more information please acess https://www.ncbi.nlm.nih.gov/sra/docs/sradownload/

prefetch --option-file SraAccList.txt

#SraAccList.txt it is your SRR assession number list

# to download fastq from entire SRR files:

mkdir fastq
fasterq-dump --outdir fastq --split-files ./SRR*

#./SRR* is an alias to all SRR dir in your directory.




