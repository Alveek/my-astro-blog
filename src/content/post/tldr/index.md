---
title: "tldr"
description: "tldr, как альтернатива man"
publishDate: 06 Jan 2024
tags:
  - linux
  - tools
draft: false
---

## Установка

```bash
# Nodejs
npm install -g tldr

# Pip3
pip3 install tldr

# Homebrew
brew install tlrc
```

Также есть возможность пользоваться справочником [онлайн](https://tldr.inbrowser.app/)

## Использование

```bash
$ tldr команда
```

## Описание

[tldr](https://tldr.sh/) - это утилита, которая выводит краткое описание и примеры использования какой-либо команды в терминале.

Например, вот так выглядит описание команды `mkdir` с помощью `--help`

```bash
$ mkdir --help


Usage: mkdir [OPTION]... DIRECTORY...
Create the DIRECTORY(ies), if they do not already exist.

Mandatory arguments to long options are mandatory for short options too.
  -m, --mode=MODE   set file mode (as in chmod), not a=rwx - umask
  -p, --parents     no error if existing, make parent directories as needed
...
```

А вот так используя **tldr**:

```bash
$ tldr mkdir

  mkdir

  Create directories and set their permissions.
  More information: https://www.gnu.org/software/coreutils/mkdir.

  - Create specific directories:
    mkdir path/to/directory1 path/to/directory2 ...

  - Create specific directories and their [p]arents if needed:
    mkdir -p path/to/directory1 path/to/directory2 ...

  - Create directories with specific permissions:
    mkdir -m rwxrw-r-- path/to/directory1 path/to/directory2 ...

```

**tldr** выглядит намного дружелюбнее.
